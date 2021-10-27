const main = async () => {
    // Again going by line here
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    
    //This will actually compile our contract and generate the necessary files
    // we need to work with our contract under the artifacts directory. 
    // Go check it out after you run this :).
    const waveContract = await waveContractFactory.deploy();

    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();