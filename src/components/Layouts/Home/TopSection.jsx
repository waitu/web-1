import React, { useEffect, useState } from 'react'
import { openNotification, openNotificationWithIcon } from '../../helpers/function'
import Web3 from 'web3';
import { notification } from 'antd';
import contactABI from '../../helpers/contractABI.json'
import contactABI_IPS from '../../helpers/contractABI_IPS.json'
const tokenContractIPSAddress = '0x907443BCbB64905E19D9c8255aCDa72537af6476';
const tokenContractBNBAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
const pancakeRouterAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const TopSection = () => {
    const [isConnected, setConnected] = useState(false); //connect account
    const [walletAddress, setWalletAddress] = useState(""); // wallet account
    const [balance, setBalance] = useState();
    const [receive, setReceive] = useState();
    const [web3, setWeb3] = useState(null);
    const [amount, setAmount] = useState(0);
    const [buyButtonEnabled, setBuyButtonEnabled] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    const [tokenContractIPS, setTokenContractIPS] = useState(null);
    const [consumedAmount, setConsumedAmount] = useState(0);//luong tieu thu
    const [maxAmount, setMaxAmount] = useState(100000000);
    //notification

    useEffect(() => {
        const initWeb3 = async () => {
            try {
              if (window.ethereum) {
                const newWeb3 = new Web3(window.ethereum);
                setWeb3(newWeb3);
          
                const tokenContract = new newWeb3.eth.Contract(contactABI_IPS, tokenContractIPSAddress);
                setTokenContractIPS(tokenContract);
                const consumedAmount = await tokenContract.methods.balanceOf(walletAddress).call();
                  const consumedAmountInIPS = parseInt(consumedAmount) / Math.pow(10, 18);
                  setConsumedAmount(consumedAmountInIPS);
                  console.log(consumedAmountInIPS);
              } else { 
                openNotificationWithIcon('error', 'Error Metamask', 'Please install MetaMask');
              }
            } catch (error) {
              console.log(error.message);
            }
          };
        initWeb3();
    }, [walletAddress]);
    const percentage = (consumedAmount / maxAmount) * 100;
    useEffect(() => {
        addWalletListener();
        ConnectWalletState();
    }, []);

    const ConnectWalletState = async () => {
        try {
            if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts"
                });

                if (accounts.length > 0) {
                    setConnected(true);
                    setWalletAddress(accounts[0]);
                    checkBalance(accounts[0]);
                }
            } else {
                setConnected(false);
            }
        } catch (error) {
            console.error('Error connecting wallet:', error.message);
        }
    };

    const connectWallet = async () => {
        try {
            if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setWalletAddress(accounts[0]);
            } else {
                openNotification('Metamask is not installed', 'Please install Metamask extension from https://metamask.io/')
            }
        } catch (error) {
            console.error('Error connecting wallet:', error.message);
        }
    };

    const addWalletListener = async () => {
        try {
            if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
                await window.ethereum.on("accountsChanged", (accounts) => {
                    setWalletAddress(accounts[0]);
                    checkBalance(accounts[0]);
                });
            } else {
                setWalletAddress("");
                setConnected(false);
                openNotification('Metamask is not installed', 'Please install Metamask extension from https://metamask.io/')
            }
        } catch (error) {
            console.error('Error adding wallet listener:', error.message);
        }
    };

    const checkBalance = async (account) => {
        try {
            if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
                const balance = await window.ethereum.request({
                    "method": "eth_getBalance",
                    "params": [
                        account,
                        "latest"
                    ]
                });
                setBalance(parseInt(balance) / Math.pow(10, 18));
            } else {
                setBalance(0);
            }
        } catch (error) {
            console.error('Error checking balance:', error.message);
        }
    };



    const handleAmountChange = async (e) => {
        const inputAmount = e.target.value;
        const amountInWei = web3.utils.toWei(inputAmount, 'ether');
        setAmount(amountInWei);
        const receiveAmount = await estimateTokenAmount(inputAmount);
        setReceive(receiveAmount !== undefined ? receiveAmount : 'NaN');
        setBuyButtonEnabled(Boolean(inputAmount.trim()));
    };

    const handleReceiveChange = (e) => {
        setReceive(e.target.value);

    };
    const estimateTokenAmount = async (amount) => {
        try {
            if (!web3) {
                console.error('Web3 is not initialized.');
                return;
            }
            const pancakeRouterContract = new web3.eth.Contract(contactABI, pancakeRouterAddress);
            const path = [
                web3.utils.toChecksumAddress(tokenContractBNBAddress), // BNB
                web3.utils.toChecksumAddress(tokenContractIPSAddress),
            ];
            const amountIn = web3.utils.toWei(amount, 'ether');
            const amountsOut = await pancakeRouterContract.methods.getAmountsOut(amountIn, path).call();
            const estimatedTokenAmount = web3.utils.fromWei(amountsOut[amountsOut.length - 1], 'ether');
            return estimatedTokenAmount;
        } catch (error) {
            console.error('Error estimating token amount:', error.message);
        }
    };
    const convertBNBToToken = async () => {
        try {
            if (Math.abs(amount) < Number.EPSILON) {
                return openNotificationWithIcon('error', 'Your pay empty', 'Is require amount');
            }
            const pancakeRouterContract = new web3.eth.Contract(contactABI, pancakeRouterAddress);
            const path = [
                web3.utils.toChecksumAddress('0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'), // BNB
                web3.utils.toChecksumAddress(tokenContractIPSAddress),
            ];
            const deadline = Math.floor(Date.now() / 1000) + 60 * 10;
            const gasPrice = await window.ethereum.request({
                method: 'eth_gasPrice',
                params: [],
            });
            const tx = await pancakeRouterContract.methods.swapExactETHForTokens(
                '0',
                path,
                walletAddress,
                deadline
            ).send({
                from: walletAddress,
                value: amount,
                gasPrice: gasPrice,
            });
            const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
            if (receipt && receipt.status) {
                openNotificationWithIcon('success', 'Transaction successful!', 'BNB to IPS transaction hash:', tx.transactionHash)
            } else {
                openNotificationWithIcon('error', 'Transaction failed.', `Unable to transaction successfully`)
            }
        } catch (error) {
            openNotificationWithIcon('error', 'Error converting BNB to token', error.message)
        }
    };
    return (
        <div id="top_section" className=" banner_main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#myCarousel"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#myCarousel" data-slide-to={1} />
                                <li data-target="#myCarousel" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container-fluid">
                                        <div className="carousel-caption relative">
                                            <div className="row d_flex">
                                                <div className="col-md-7">
                                                    <div className="con_img">
                                                        <div className="bluid mx-auto">
                                                            <h1 className="text-warning">
                                                                Smart Purse Tech
                                                                <span className="text-white">
                                                                    <br />
                                                                    all-in-one
                                                                </span>
                                                                die    <p className="mt-2">
                                                                    SPT provides users with intelligent and secure
                                                                    transaction methods. It offers smart AI-powered
                                                                    data analysis tools and serves as a solution for
                                                                    creators through its NFT marketplace.
                                                                </p>
                                                            </h1>
                                                        </div>
                                                        <figure>
                                                            <img
                                                                className="img_responsive"
                                                                src="images/g3.png"
                                                                alt="#"
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 rounded-top">
                                                    <div
                                                        style={{ backgroundColor: "black" }}
                                                        className="w-75 mt-5 rounded"
                                                    >
                                                        <h1 className="text-dark fw-bold bg-warning py-3 px-0 mx-0 text-center rounded-top">
                                                            BUY IN IPS!
                                                        </h1>
                                                        <div className="mt-4 p-3">
                                                            {/* <h3 className="py-2 text-center">
                                                                NEXT PRICE INCREASE TO $0.0148 IN
                                                            </h3> */}
                                                            {/* <div
                                                                style={{
                                                                    color: "black",
                                                                    fontWeight: "bold",
                                                                    fontSize: "larger"
                                                                }}
                                                                className="d-flex justify-content-center"
                                                            >
                                                                <div className="time-box">
                                                                    <div className="rounded-2 p-2">24h</div>
                                                                </div>
                                                                <div className="separator">:</div>
                                                                <div className="time-box">
                                                                    <div className="box p-2">24m</div>
                                                                </div>
                                                                <div className="separator">:</div>
                                                                <div className="time-box">
                                                                    <div className="box p-2">20s</div>
                                                                </div>
                                                            </div> */}
                                                            <div className="mt-3 text-center">
                                                                <span>Progress</span>
                                                                <div className="progress mt-2">
                                                                    <div
                                                                        className="progress-bar bg-warning"
                                                                        role="progressbar"
                                                                        style={{ width: `${percentage}%` }}
                                                                        aria-valuenow={percentage}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    >
                                                                        {percentage.toFixed(2)}%
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between mt-2">
                                                                    <span className="text-left">{consumedAmount.toFixed(2)} IPS</span>
                                                                    <span className="text-right">{maxAmount.toFixed(2)} IPS</span>
                                                                </div>
                                                            </div>
                                                            <div className="text-left rounded-2 mt-4">
                                                                <p className="position-relative text-center mt-2">
                                                                    <strong className="px-2 py-1 bg-dark text-white">
                                                                        $0.01 = 78 IPS
                                                                    </strong>
                                                                </p>
                                                                <p className="mt-2">
                                                                    <strong>
                                                                        {walletAddress.length > 0 ? (
                                                                            <span className='text-success'>{`Connected : ${(walletAddress).substring(0, 6)}...${(walletAddress).substring(38)}`}</span>
                                                                        ) : (
                                                                            <span className='text-danger'>Not Connected</span>
                                                                        )}
                                                                    </strong>

                                                                </p>
                                                                <p className="mt-2">
                                                                    <strong>Wallet Balance:</strong> {balance !== '' ? String(balance).substring(0, 6) : 'not connect Balance BNB'}
                                                                </p>
                                                                <p className="mt-2">
                                                                    <strong>BNB you pay</strong>{" "}
                                                                    <button className="rounded border">Max</button>
                                                                </p>
                                                                <p className="mt-2">
                                                                    <input
                                                                        type='number'
                                                                        className="form-control"
                                                                        placeholder="Enter amount"
                                                                        onChange={handleAmountChange}
                                                                    />
                                                                </p>
                                                                <p className="mt-2">
                                                                    <strong>Receive IPS you receive:</strong>
                                                                </p>
                                                                <p className="mt-2">
                                                                    <input
                                                                        className="form-control"
                                                                        placeholder="Receive"
                                                                        value={receive}
                                                                        onChange={handleReceiveChange}
                                                                    />
                                                                </p>
                                                                <p className="mt-2 text-center">
                                                                    {isConnected ? (
                                                                        <button className="btn btn-primary mt-3" onClick={convertBNBToToken} disabled={!buyButtonEnabled}>
                                                                            Buy now
                                                                        </button>
                                                                    ) : (
                                                                        <button className="btn btn-primary mt-3" onClick={connectWallet}>
                                                                            Connect Wallet
                                                                        </button>
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="carousel-item">
                          <div class="container-fluid">
                              <div class="carousel-caption relative">
                                  <div class="row d_flex">
                                      <div class="col-md-6">
                                          <div class="con_img">
                                              <figure><img class="img_responsive" src="images/top_img.png" alt="#" /></figure>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="bluid">
                                              <h1>Progress <br> Your Bitcoin Money Success</h1>
                                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                              </p>
                                              <Link class="read_more" href="Javascript:void(0)">Read More </Link><Link class="read_more" href="Javascript:void(0)">Get A Quote </Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div> */}
                                {/* <div class="carousel-item">
                          <div class="container-fluid">
                              <div class="carousel-caption relative">
                                  <div class="row d_flex">
                                      <div class="col-md-6">
                                          <div class="con_img">
                                              <figure><img class="img_responsive" src="images/top_img.png" alt="#" /></figure>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="bluid">
                                              <h1>Progress <br> Your Bitcoin Money Success</h1>
                                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                              </p>
                                              <Link class="read_more" href="Javascript:void(0)">Read More </Link><Link class="read_more" href="Javascript:void(0)">Get A Quote </Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div> */}
                            </div>
                            {/* <Link class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                      <i class="fa fa-angle-left" aria-hidden="true"></i>
                      <span class="sr-only">Previous</span>
                  </Link>
                  <Link class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                      <span class="sr-only">Next</span>
                  </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopSection