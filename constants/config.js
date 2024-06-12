const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:4173',
    'https://chat-client-lyart.vercel.app' // your Vercel frontend URL
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // allow sending cookies
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
