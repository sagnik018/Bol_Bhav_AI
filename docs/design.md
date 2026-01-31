## Architecture

Frontend (React + Voice UI)
        ↓
Backend API (Node + Express)
        ↓
Speech & Language Processing
        ↓
Price Intelligence Engine
        ↓
Negotiation Logic Engine
        ↓
Guidance Returned to Vendor

## Negotiation Logic
- If buyer_price < market_min → Walk Away (Red)
- If buyer_price ≈ market_avg → Hold (Yellow)
- If buyer_price ≥ market_max → Accept (Green)

## Scalability
- Plug-in ML price models
- Add WhatsApp voice bot
- Multi-market support

## Security
- No sensitive data stored
- Rate-limited APIs
- Input sanitization

Structure of the Code
Bol_Bhav_AI/
├── client/                 # React frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.jsx     # Main React app with routing
│   │   │   └── index.js    # Entry point
│   │   ├── components/
│   │   │   └── MicButton.jsx # Voice recording component
│   │   ├── pages/
│   │   │   ├── Home.jsx    # Landing page
│   │   │   ├── Negotiation.jsx # Voice input page
│   │   │   └── Result.jsx  # Results display
│   │   ├── services/
│   │   │   └── api.js      # API communication
│   │   └── styles/         # CSS files
│   └── package.json        # React dependencies
├── server/                 # Node.js backend
│   ├── app/
│   │   ├── app.js          # Express app setup
│   │   └── server.js       # Server entry point
│   ├── controllers/
│   │   ├── negotiationController.js # Main logic
│   │   ├── negotiationService.js    # Business logic
│   │   └── priceService.js         # Price data
│   ├── models/              # Data models (MongoDB)
│   ├── routes/
│   │   └── apiRoutes.js    # API endpoints
│   └── config/
│       └── db.js           # Database configuration
└── docs/                   # Documentation