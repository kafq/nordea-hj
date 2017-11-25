const CLIENT_ID = '7c919e6f-fa11-40d5-93bf-83ece9cdfece';
const CLIENT_SECRET = 'B6pL2hL8jP8oR4pL0fM1bN7kA2aG3wF8vJ8sD1qE8sP0dS6tJ2';
const TOKEN = 'Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiZGlyIn0..jGkBPYMPzSBWAj7s.TI_PzVg4W9_bmwChnkkuIXfLcALZuG1NDT7gOafn2qxPmKxrseCFgeuVDk1C8op-SZYljnwZ-rBDCNzh6UYb5pI8YJutW8GVQm5qAgL5G1eu2bxtncjf73z0sA4LbulEtEBNGCp3-ANRZzzt_k2g-Nq89hwcAWEQM-8e6RVtJGIPriDXiGM7sNBLFwcJvrtJmb4a5s7FJw0vEjAO2UzWnCRaBsXBtlXTx8Ka7OSQRTp6qQfusLpU-WKdMZ3fVANveZcHw9ORKqkkeYLqAM8zDyTmpnbU1ej241X4-Hmq7Jir3Pk7Hupymuy1VA7IPF0QkhdJecuMU13jh9D4Fs7-y1uteo6vXRC4WNSSP8duFITc-STQOl6_4sEmvZTyLhm1-dBjuBBLPVimtTWFxTAW1fRzy-uqKPRe-X64ar52IXkQjsbHW7KrggVDan07oR6-17XQhetKyaxIcXB5SJrfP2gGBngjUTHCe6mMGaJh1ZX5-tBhyXESKpQKqsvJLqpGk15CGPwzCn_Kv8qwRLyZAj9rRyCqTc5YrFbMqcDr9bVYfFirUrCQPx7x89g1SAuzOMCFuzrgSdWS9czc9BrQwtIhiUSTkZaIZIeDqiSGfc6w45K4ETFzPFqLVEcb1y3mQWZtxZC1emS-LowY3Q_zWUCoRWrxlfUlMqSierNdl6XZDWORFJXRO3TclQHusHmzuDaF-2lUlcixYHhXXf9MfAICfza39aYZ3_rIz9Fi7UIAsf0DPmT1uiDomZKyIRlb9P6K_N-A4TElhmEHhMP_I8sJJFq_wiR-Qugs0llmcpotoVpAxihabhTp_V-q4lCBx_ArR23AW3-U_7PLC9y51BS1wEdI0skYMldlwf2DzM1qCEazQCsC7wsjwXD0dDQxpp3cD1vp0ZtcnyLs1GP82XaGPCeupKqlxz6LxUIJma5oCLX_B7LCz1XJnBlm2Vk1NihJuVlH07AV6tboGTI4I4c4x5QJlEO3-N6Sx1XFaB6Qsg8RGqb5muoL5gZ-LYUEH0bMS4kVfqU7ZSdpIw25D0M7wSW8hxjfA6DB4FRACrijvBxJQcS9JHJfYQyV-0PbkIZ0MOQ6S6aoCadhU7faAF-E7YAaIVmipDTCPV59N8XpFBlZWMqWI2OaBNn8Ih_-i_0VhuLZ6WmEGeKoW6-zLGnir8Q1mh9ubtUIgA-PePTx6OYZfoL42RuWnbhcLlsujWQLaHspROe9mZKlfgp88V4MzWE.okOWMQ9MFCtLe1A4lkC9Xg';

const ACCOUNT_ID_A = 'FI6593857450293470-EUR';
const ACCOUNT_ID_B = 'FI7473834510057469-EUR';

export default class Database {
    static listUserAssets() {
        fetch('https://api.hackathon.developer.nordeaopenbanking.com/v1/assets', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                "access-control-allow-credentials": true,
                'X-IBM-Client-Id': '7c919e6f-fa11-40d5-93bf-83ece9cdfece',
                'X-IBM-Client-Secret': CLIENT_SECRET,
                'Authorization': TOKEN,
              },
        }).then((res) => {
            return res.json();
        }).then((json) => {
            console.log(json);
            callback(json)
        })
    }
    static listAccounts(callback) {
        fetch('https://api.hackathon.developer.nordeaopenbanking.com/v2/accounts', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                "access-control-allow-credentials": true,
                'X-IBM-Client-Id': '7c919e6f-fa11-40d5-93bf-83ece9cdfece',
                'X-IBM-Client-Secret': CLIENT_SECRET,
                'Authorization': TOKEN,
              },
        }).then((res) => {
            return res.json();
        }).then((json) => {
            console.log(json);
            callback(json.response.accounts)
        })
    }
    static getAccountDetailsById(id) {
        fetch(`https://api.hackathon.developer.nordeaopenbanking.com/v2/accounts/${id}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                "access-control-allow-credentials": true,
                'X-IBM-Client-Id': '7c919e6f-fa11-40d5-93bf-83ece9cdfece',
                'X-IBM-Client-Secret': CLIENT_SECRET,
                'Authorization': TOKEN,
              },
        }).then((res) => {
            return res.json();
        }).then((json) => {
            console.log(json);
        })
    }
    static getAccountTransactions(id, callback, fromDate, toDate, language, continuationKey) {
        fetch(`https://api.hackathon.developer.nordeaopenbanking.com/v2/accounts/${id || ''}/transactions?fromDate=${fromDate || ''}&toDate=${toDate || ''}&language=${language || ''}&continuationKey=${continuationKey || ''}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                "access-control-allow-credentials": true,
                'X-IBM-Client-Id': '7c919e6f-fa11-40d5-93bf-83ece9cdfece',
                'X-IBM-Client-Secret': CLIENT_SECRET,
                'Authorization': TOKEN,
              },
        }).then((res) => {
            return res.json();
        }).then((json) => {
            console.log(json);
            callback(json.response.transactions)
        })
    }

    
    static getAllPayments(callback) {
        fetch(`https://api.hackathon.developer.nordeaopenbanking.com/v2/payments/sepa`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                "access-control-allow-credentials": true,
                'X-IBM-Client-Id': '7c919e6f-fa11-40d5-93bf-83ece9cdfece',
                'X-IBM-Client-Secret': CLIENT_SECRET,
                'Authorization': TOKEN,
              },
        }).then((res) => {
            return res.json();
        }).then((json) => {
            console.log(json);
            callback(json.response.payments)
        })
    }
}