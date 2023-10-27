import axios from 'axios';
import cheerio from 'cheerio';

export async function scrapeAmazonProduct(url: string) {
    if(!url) return;

    const username = String(process.env.USERNAME)
    const password = String(process.env.PASSWORD)
    const port = 22225;
    const session_id = (1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }
    try {
        // Fetch Product Page
        const response = await axios.get(url, options); {
    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`)
    }  

}