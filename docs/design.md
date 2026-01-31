# Bol Bhav AI - Design Documentation

## 🏗️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   Intelligence  │
│   (React)       │◄──►│   (Express)     │◄──►│   Engine        │
│                 │    │                 │    │                 │
│ • Voice UI      │    │ • REST Endpoints│    │ • Price Logic   │
│ • Bilingual     │    │ • CORS          │    │ • Rules Engine  │
│ • Professional  │    │ • Validation    │    │ • Error Handling│
│   Design        │    │ • State Mgmt    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🎯 User Flow Design

### 1. Landing Experience
```
Home Page (Bilingual)
├── Language Toggle (EN/हि)
├── Hero Section with Branding
├── Feature Cards (3 key benefits)
└── Primary CTA → Negotiation
```

### 2. Voice Interaction
```
Negotiation Interface
├── Language Persistence
├── Voice Input Card
├── Microphone Button
├── Example Phrases
└── Real-time Feedback
```

### 3. Results Display
```
Guidance Page
├── Action Recommendation
├── Price Detection Display
├── Speech Text Confirmation
└── Navigation Options
```

## 🎨 Design System

### Color Psychology
- **Primary Blue** (`#2563eb`): Trust, Professionalism
- **Success Green** (`#059669`): Accept, Profit
- **Warning Amber** (`#d97706`): Hold, Caution
- **Danger Red** (`#dc2626`): Walk, Loss
- **Neutral Gray** (`#64748b`): Secondary text

### Typography Hierarchy
```
H1: 2.5rem (700 weight) - Main branding
H2: 2rem (600 weight) - Page titles
H3: 1.25rem (600 weight) - Section headers
Body: 1rem (400 weight) - Content
Small: 0.875rem (400 weight) - Metadata
```

### Component Library
- **Language Toggle**: Floating circular button (48px)
- **Voice Button**: Large pill-shaped with states
- **Guidance Cards**: Gradient with colored top border
- **Action Buttons**: Consistent padding and shadows
- **Cards**: Subtle borders with hover effects

## 🧠 Intelligence Engine

### Negotiation Logic Algorithm
```javascript
function getGuidance(price, market) {
  if (price < market.min) return "WALK";
  if (price > market.max) return "ACCEPT";
  return "HOLD";
}
```

### Price Extraction
- **Regex Pattern**: `/\d+/` for numerical detection
- **Language Support**: Hindi & English speech recognition
- **Validation**: Fallback for non-numeric input
- **Error Handling**: Graceful degradation

### Market Intelligence
```javascript
const marketRanges = {
  default: { min: 80, max: 120 },
  // Future: Dynamic market data
};
```

## 🌐 Bilingual Design

### Language Implementation
- **Detection**: localStorage persistence
- **Toggle**: EN/हि circular button
- **Speech**: `hi-IN` and `en-US` locales
- **UI**: Complete translation coverage

### Translation Strategy
```
English → Hindi Mapping:
"Start Negotiation" → "बातचीत शुरू करें"
"State Your Price" → "अपना भाव बोलिए"
"Get Advice" → "सलाह"
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (Stacked layout)
- **Tablet**: 768px - 1024px (Adjusted spacing)
- **Desktop**: > 1024px (Full grid)

### Mobile Optimizations
- **Touch Targets**: Minimum 44px
- **Stacked Layouts**: Single column
- **Reduced Motion**: Performance focus
- **Simplified Navigation**: Essential actions only

## 🔧 Technical Architecture

### Frontend Components
```
src/
├── app/
│   ├── app.jsx          # Router + layout
│   └── index.js         # Entry point
├── components/
│   ├── micbutton.jsx    # Voice input
│   ├── guidanceIndicator.jsx # Results
│   └── header.jsx       # Navigation
├── pages/
│   ├── home.jsx         # Landing
│   ├── negotiation.jsx  # Voice UI
│   └── result.jsx       # Guidance
├── services/
│   └── api.js           # API client
└── styles/
    └── global.css       # Design system
```

### Backend Architecture
```
server/
├── app/
│   ├── app.js           # Express setup
│   └── server.js        # Server start
├── controllers/
│   ├── negotiationController.js # API handlers
│   └── negotiationService.js    # Business logic
└── routes/
    └── apiRoutes.js     # Route definitions
```

## 🔄 State Management

### Client-side State
- **Language Preference**: localStorage
- **Navigation**: React Router
- **Component State**: useState hooks
- **API State**: Fetch + useEffect

### Server-side State
- **Session Memory**: In-memory storage
- **Request Context**: Express req/res
- **Error Handling**: Try-catch blocks
- **Validation**: Input sanitization

## 🚀 Performance Optimizations

### Frontend
- **CSS Variables**: Fast theme switching
- **Component Lazy Loading**: Route-based splitting
- **Optimized Animations**: CSS transforms
- **Font Loading**: Google Fonts preload

### Backend
- **Lightweight Express**: Minimal dependencies
- **In-memory Storage**: Fast response times
- **Error Boundaries**: Graceful failures
- **CORS Headers**: Optimized cross-origin

## 🔒 Security Design

### Input Validation
```javascript
const speech = req.body.speech || '';
const match = speech.match(/\d+/);
if (!match) {
  return res.status(400).json({ error: "No price detected" });
}
```

### Privacy Protection
- **No Data Persistence**: Stateless processing
- **Local Processing**: No external APIs
- **Input Sanitization**: Regex validation
- **CORS Configuration**: Restricted origins

## 📊 Analytics & Monitoring

### User Interaction Tracking
- **Language Usage**: Toggle frequency
- **Voice Success Rate**: Recognition accuracy
- **Guidance Actions**: Decision distribution
- **Error Rates**: Failure patterns

### Performance Metrics
- **Response Time**: API latency
- **Speech Recognition**: Processing speed
- **UI Performance**: Render times
- **Error Tracking**: Exception monitoring

## 🎯 Future Design Considerations

### Scalability Architecture
```
Phase 1: Current MVP
├── Rule-based logic
├── Single server
└── Basic UI

Phase 2: Enhanced Intelligence
├── ML price models
├── Historical data
└── Advanced analytics

Phase 3: Platform Expansion
├── Multi-market support
├── Mobile apps
└── API ecosystem
```

### Design System Evolution
- **Component Library**: Reusable UI kit
- **Design Tokens**: Centralized theming
- **Accessibility**: WCAG compliance
- **Internationalization**: Multi-language support

## 🔄 Development Workflow

### Component Design Process
1. **User Stories**: Define requirements
2. **Wireframes**: Layout planning
3. **Design System**: Apply tokens
4. **Implementation**: Code development
5. **Testing**: Cross-browser validation
6. **Iteration**: User feedback integration

### Quality Assurance
- **Code Review**: Peer validation
- **Testing**: Unit + integration
- **Performance**: Load testing
- **Accessibility**: Screen reader support
- **Security**: Vulnerability scanning

---

*This design document reflects the current implementation and future roadmap for Bol Bhav AI's professional negotiation platform.*