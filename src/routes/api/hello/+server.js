export function GET() {
    return new Response(JSON.stringify({ message: 'Ahoj světe!' }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
