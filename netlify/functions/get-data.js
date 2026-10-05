// Example using a generic Postgres/Neon/Supabase client connection
export async function handler(event, context) {
    try {
        // Fetch your data from the database here using process.env.DATABASE_URL
        // const data = await db.query('SELECT * FROM items');

        const mockData = [
            { id: 1, name: 'First Item from Database' },
            { id: 2, name: 'Second Item from Database' }
        ];

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mockData),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}
