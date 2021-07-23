const NativeToken = artifacts.require('./NativeToken.sol')

module.exports = async function (deployer) {

    await deployer.deploy(NativeToken, "xNAME", "xALIAS")

    const token = await NativeToken.deployed()

    await token.mint(process.env.DEV_ADDRESS, web3.utils.toWei(process.env.TOKENS_MINT))

}