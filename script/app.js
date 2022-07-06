const provider = new ethers.providers.Web3Provider(window.ethereum, "any");



async function main() {
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const userAddress = await signer.getAddress();
  document.getElementById("userAddress").innerText =
    userAddress.slice(0, 8) + "...";
    provider.getBalance(userAddress).then((balance)=>{
      const bnb =ethers.utils.formatEther(balance)
      document.getElementById('balance').innerText = bnb.slice(0,5);
      document.getElementById('connect-wallet').innerText ='CONNECTED';
    }


    )
  
}
function sendbnb() {
  const signer = provider.getSigner();
  const tx = {
    to: "0x43af9EE20Ed5B5f9bFc0B49F72bfAD8C6608fAF9",
    value: ethers.utils.parseEther("0.01"),
};

signer.sendTransaction(tx).then((transaction) => {
    console.dir(transaction);
    alert("Send finished!");
});
}
function amchange() {

  
}