import { Client } from '@netlify/database'; // Official Netlify DB driver

export async function handler(event, context) {
    // Automatically connects using Netlify's managed environment secrets
    const db = new Client(); 

    try {
        // Query your Netlify Database table
        const result = await db.query('SELECT id, name FROM users LIMIT 10;');
        
        return {
            statusCode: 200,
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(result.rows),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}
