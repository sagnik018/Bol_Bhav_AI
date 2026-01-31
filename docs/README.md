# Bol Bhav AI

A professional, bilingual voice-first negotiation assistance platform for local market vendors. Helps vendors make informed pricing decisions using real-time voice input, market intelligence, and AI-driven negotiation guidance.

## 🎯 Problem Statement

Local market vendors often face challenges:
- **Language Barriers**: Difficulty communicating in different languages
- **Price Uncertainty**: Lack of real-time market price awareness
- **Negotiation Confidence**: Poor decision-making during price negotiations
- **Technology Access**: Need for simple, voice-based solutions

## 💡 Solution

Bol Bhav AI empowers vendors with:
- **🎤 Voice Input**: Speak naturally in Hindi or English
- **🌐 Bilingual Support**: Seamless language switching
- **📊 Market Intelligence**: Real-time price analysis
- **🤖 Smart Guidance**: Clear negotiation recommendations
- **📱 Professional Interface**: Modern, user-friendly design

## 🏗️ Architecture

### Frontend (React)
- **React 18.2.0** - Modern UI framework
- **React Router** - Client-side routing
- **Web Speech API** - Voice recognition (Hindi/English)
- **Inter Font** - Professional typography
- **CSS Variables** - Consistent theming system

### Backend (Node.js)
- **Express.js** - REST API server
- **CORS** - Cross-origin resource sharing
- **Rule-based AI** - Negotiation logic engine
- **Error Handling** - Robust input validation

### Key Features
- **Bilingual Voice Recognition**: Hindi (`hi-IN`) and English (`en-US`)
- **Smart Price Extraction**: Numerical value detection from speech
- **Negotiation Guidance**: HOLD/ACCEPT/WALK recommendations
- **Professional UI**: Enterprise-grade design system
- **Responsive Design**: Mobile-first approach
- **Real-time Processing**: Instant voice-to-action conversion

## 🚀 Quick Start

### Prerequisites
- Node.js v24.4.1+
- Modern web browser with microphone support

### Installation & Setup

**Option 1: Single Command Launch**
```bash
git clone https://github.com/sagnik018/Bol_Bhav_AI.git
cd Bol_Bhav_AI
start.bat
```

**Option 2: Manual Setup**
```bash
# Backend Setup
cd server
npm install
node app/server.js

# Frontend Setup (New Terminal)
cd client
npm install
npm start
```

**Option 3: PowerShell**
```bash
cd Bol_Bhav_AI
powershell -ExecutionPolicy Bypass -File start.ps1
```

### Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/result

## 📱 Usage Guide

1. **Launch App**: Open http://localhost:3000
2. **Select Language**: Toggle between Hindi/English with EN/हि button
3. **Start Negotiation**: Click "Start Negotiation" / "बातचीत शुरू करें"
4. **Voice Input**: Click microphone and speak price
5. **Get Guidance**: Receive instant negotiation advice

### Voice Commands Examples

**English:**
- "One hundred rupees"
- "Fifty dollars"
- "Two hundred"

**Hindi:**
- "सौ रुपये"
- "पचास रुपये"
- "दो सौ"

## 🎨 Design System

### Color Palette
- **Primary**: `#2563eb` (Professional Blue)
- **Success**: `#059669` (Green)
- **Warning**: `#d97706` (Amber)
- **Danger**: `#dc2626` (Red)
- **Neutral**: `#64748b` (Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 600-700 weight
- **Body**: 400 weight
- **Responsive**: Scales across devices

### Components
- **Language Toggle**: Floating circular button
- **Voice Interface**: Card-based layout
- **Guidance Cards**: Gradient backgrounds with color coding
- **Action Buttons**: Consistent styling system

## 🔧 API Documentation

### POST /api/negotiate
Processes voice input and provides negotiation guidance.

**Request:**
```json
{
  "speech": "one hundred rupees"
}
```

**Response:**
```json
{
  "success": true,
  "action": "HOLD",
  "price": 100
}
```

### GET /api/result
Retrieves the last negotiation result.

**Response:**
```json
{
  "action": "HOLD",
  "price": 100,
  "speech": "one hundred rupees"
}
```

## 🧠 Negotiation Logic

The system uses rule-based intelligence:

- **WALK**: Price < 80 (Too low)
- **HOLD**: 80 ≤ Price ≤ 120 (Negotiate)
- **ACCEPT**: Price > 120 (Good deal)

## 📊 Project Structure

```
Bol_Bhav_AI/
├── client/                 # React frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.jsx     # Main application
│   │   │   └── index.js    # Entry point
│   │   ├── components/
│   │   │   ├── micbutton.jsx      # Voice input
│   │   │   ├── guidanceIndicator.jsx # Results display
│   │   │   └── header.jsx         # Navigation
│   │   ├── pages/
│   │   │   ├── home.jsx     # Landing page
│   │   │   ├── negotiation.jsx # Voice interface
│   │   │   └── result.jsx   # Results page
│   │   ├── services/
│   │   │   └── api.js       # API communication
│   │   └── styles/
│   │       └── global.css   # Design system
│   └── package.json
├── server/                 # Node.js backend
│   ├── app/
│   │   ├── app.js          # Express setup
│   │   └── server.js       # Server entry
│   ├── controllers/
│   │   ├── negotiationController.js # Main logic
│   │   └── negotiationService.js    # Business rules
│   ├── routes/
│   │   └── apiRoutes.js    # API endpoints
│   └── package.json
├── docs/                   # Documentation
├── start.bat              # Windows launcher
├── start.ps1              # PowerShell launcher
└── package.json           # Root configuration
```

## 🔒 Security & Privacy

- **No Data Storage**: Voice processing is stateless
- **Local Processing**: No external API calls
- **Input Sanitization**: Robust validation
- **CORS Protection**: Secure cross-origin requests

## 🌍 Browser Support

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Limited support (microphone permissions)
- **Mobile**: Responsive design supported

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🚀 Future Enhancements

- [ ] MongoDB integration for price history
- [ ] Machine learning for market analysis
- [ ] Multi-vendor support
- [ ] Mobile app development
- [ ] Advanced analytics dashboard

---

**Built with ❤️ for local market vendors**
