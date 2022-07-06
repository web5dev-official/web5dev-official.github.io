const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
ethereum.on('chainChanged', (_chainId) => window.location.reload(),
main());



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
  getid();
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
function getid() {
  // let ChainId=ethereum.chainId;
  // if (ChainId=='0x1') {
  //   console.log('you are connected with etherum blockchain')
  // } else {
  //   console.log('you are not connected with etherum blockchain')
  // }
  switch (ethereum.chainId) {
    case '0x1':
      document.getElementById('blockchain-status').innerText = 'YOU ARE CONNECTED WITH : ETHERUM MAINNET';
      document.getElementById('native-token').innerText = 'ETH'
      document.getElementById('donation-text').innerText = 'Donate 0.01 Eth To The Devloper'
      break;
    case '0x61':
      document.getElementById('blockchain-status').innerText = 'YOU ARE CONNECTED WITH : SMARTCHAIN TESTNET';
      document.getElementById('native-token').innerText = 'TBNB'
      document.getElementById('donation-text').innerText = 'Donate 0.01 Tbnb To The Devloper'
      break;
    case '0x38':
      document.getElementById('blockchain-status').innerText = 'YOU ARE CONNECTED WITH : SMARTCHAIN MAINNET';
      document.getElementById('native-token').innerText = 'BNB'
      document.getElementById('donation-text').innerText = 'Donate 0.01 Bnb To The Devloper'
      break;
      case '0x89':
      document.getElementById('blockchain-status').innerText = 'YOU ARE CONNECTED WITH : POLYGON MAINNET';
      document.getElementById('native-token').innerText = 'POLY'
      document.getElementById('donation-text').innerText = 'Donate 0.01 Poly To The Devloper'
      break;
      case '0x13881':
      document.getElementById('blockchain-status').innerText = 'YOU ARE CONNECTED WITH : POLYGON TESTNET';
      document.getElementById('native-token').innerText = 'POLY'
      document.getElementById('donation-text').innerText = 'Donate 0.01 Poly To The Devloper'
      break;
    default:
      console.log('you are not connected with evm based blockchain')
      break;
  }
}
