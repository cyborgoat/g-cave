const os = require("os");
var toml = require('toml');
const fs = require('fs/promises');
var path = require("path")
export async function contentConf() {
    const userHomeDir = os.homedir();
    const trConfigPath = path.join(userHomeDir, '.tech-reservoir', 'config.toml')
    try {
        const dataResponse = await fs.readFile(trConfigPath, { encoding: 'utf8' });
        return dataResponse.toString()
    } catch (err) {
        console.log(err);
    }
}


