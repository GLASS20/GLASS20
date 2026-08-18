const { ProxyAgent, setGlobalDispatcher } = require("undici");

module.exports = async (req, res) => {
    if (process.env.LOCAL_PROXY) {
        setGlobalDispatcher(
            new ProxyAgent(process.env.LOCAL_PROXY)
        );
    }

    try {
        const url = "https://steamcommunity.com/miniprofile/1513185020";

        const response = await fetch(url);

        if (!response.ok) {
            const text = await response.text();

            return res
                .status(response.status)
                .send(text);
        }

        const data = await response.text();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Cache-Control", "no-store");

        res.status(200).send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("500: Server crashed :(");
    }
};