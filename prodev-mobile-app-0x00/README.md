# ProDev Mobile App 0x00

## 🎯 Project Overview
This is the first mobile application created using React Native, TypeScript, and Expo with Expo Router. This project demonstrates the basic setup and configuration of a mobile development environment.

## ⚙️ Technology Stack
- **Language**: TypeScript
- **Framework**: React Native (via Expo)
- **Router**: Expo Router with tabs template
- **Styling**: StyleSheet API

## 📋 Project Setup Process

### 1. Project Initialization
- Created directory: `prodev-mobile-app-0x00`
- Initialized Expo project using: `npx create-expo-app@latest . --template tabs`
- Project successfully created with Expo Router and tabs navigation

### 2. Project Structure
The project follows the standard Expo App Router structure:
```
prodev-mobile-app-0x00/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx          # Home screen (modified)
│   │   ├── two.tsx            # Second tab
│   │   └── _layout.tsx        # Tab layout
│   ├── _layout.tsx            # Root layout
│   └── +not-found.tsx         # 404 page
├── assets/
├── components/
├── constants/
├── package.json
└── README.md
```

### 3. Modifications Made

#### Home Screen Text Change
**File**: `app/(tabs)/index.tsx`
**Original Text**: "Tab One"
**Modified Text**: "First App Created"

**Code Change**:
```tsx
// Before
<Text style={styles.title}>Tab One</Text>

// After
<Text style={styles.title}>First App Created</Text>
```

## 🔧 Available Scripts

The project includes the following npm scripts:
- `npm start` - Start the Expo development server
- `npm run android` - Start the app on Android emulator/device
- `npm run ios` - Start the app on iOS simulator/device (requires macOS)
- `npm run web` - Start the app in web browser
- `npm test` - Run Jest tests

## 🚨 Reset Project Command

### Attempted Command
```bash
npm run reset-project
```

### Result
**Error**: `npm error Missing script: "reset-project"`

### Analysis
The `reset-project` script is not available in this Expo project template. This script is typically found in custom project templates or specific development workflows, but the standard Expo tabs template does not include this functionality.

### Available Scripts in This Project
The project only includes the standard Expo scripts:
- `start` - expo start
- `android` - expo start --android
- `ios` - expo start --ios
- `web` - expo start --web
- `test` - jest --watchAll

## 📱 Running the Application

### Development Server
```bash
npm start
```

### Platform-Specific Commands
```bash
# For Android
npm run android

# For iOS (requires macOS)
npm run ios

# For Web
npm run web
```

## 🎯 Next Steps
1. Test the application using Expo Go on a physical device
2. Verify that the home screen displays "First App Created"
3. Explore the tabs navigation functionality
4. Begin implementing additional features and components

## 📝 Notes
- The project uses Expo Router for navigation
- TypeScript is configured and ready for development
- The tabs template provides a basic navigation structure
- All dependencies are properly installed and configured

---
**Project Created**: August 31, 2025
**Expo Version**: ~53.0.22
**React Native Version**: 0.79.6
**TypeScript Version**: ~5.8.3
