import Contentstack from "contentstack";

const Stack = Contentstack.Stack({
    api_key: process.env.CMS_API_KEY,
    delivery_token: process.env.CMS_DELIVERY_TOKEN,
    environment: process.env.CMS_ENVIRONMENT,
    region: "us",
});


export default Stack;