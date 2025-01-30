require("dotenv").config();
module.exports = {
    webhook: {
        error: "https://discord.com/api/webhooks/1334550433917571166/aItD8ojx3pU6ua0y7Fl9nXNUWtsTfyP_z68AYpFnGcJTxCn0Wqe22BnXS9f9PUeGvwPJ" || process.env.error, //webhook link where error logs are sent
        join: "https://discord.com/api/webhooks/1334550521045848125/wP9ZgiumgzO_ZJaEMqyd2mU2mCDWrElvSRq7-2uv5z8sig9H9mZ1z3gH1QOpYGRS1YIl" || process.env.join, //webhook link where join logs are sent
        leave: "https://discord.com/api/webhooks/1334550606827753613/9i9N6I04qsCEq0vcBHOwnolIkXgUa_ybo7oWDhD4rYpNLWIogn9h6zsF6iv5tRyicuiS" || process.env.leave, //webhook link where leave logs are sent
    },

    TOKEN: "MTMzNDU0NzEzNjk4OTIzNzQ2Mw.GBVHHP.WrBnBDhE7HgJCye0Rm3X6rWctjSo3mfNB2Q9Ck" || process.env.TOKEN, //Your Bot Token
    MONGO_URI: "" || process.env.MONGO_URI, //Mongo Uri
    EMBED_COLOR: "#FFFF00" || process.env.EMBED_COLOR, //Embed Color
    DEV_ID: "713758139425751150" || process.env.DEV_ID, //Developer ID
    OWNER_ID: "713758139425751150" || process.env.OWNER_ID, //Owner ID

}
