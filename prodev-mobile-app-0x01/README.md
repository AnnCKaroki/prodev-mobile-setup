# ProDev Mobile App 0x01 - Entry Screen

## 🎯 Project Overview
This is the second mobile application created using React Native, TypeScript, and Expo. This project implements an Entry Screen with three text components showcasing different styling approaches: large red text about TypeScript, medium purple right-aligned text about React Native, and small blue center-aligned text about ALX.

## ⚙️ Technology Stack
- **Language**: JavaScript (React Native)
- **Framework**: React Native (via Expo)
- **Router**: Expo Router
- **Styling**: StyleSheet API

## 📋 Project Setup Process

### 1. Project Initialization
- Created directory: `prodev-mobile-app-0x01`
- Initialized Expo project using: `npx create-expo-app@latest . --template blank`
- Project successfully created with blank template

### 2. Project Structure
The project follows the Expo App Router structure:
```
prodev-mobile-app-0x01/
├── app/
│   ├── index.tsx              # Entry Screen (implemented)
│   └── _layout.tsx            # Root layout
├── assets/
├── package.json
└── README.md
```

### 3. Modifications Made

#### Entry Screen Implementation
**File**: `app/index.tsx`
**Components Created**:
- Main container with light blue background (#90caf9)
- "Entry Screen - Awesome" (title, 28px, black color, bold, center-aligned)
- "Typescript is great if you practice more" (large text, 30px, red color, bold)
- "React Native provides you a single codebase for cross platforms" (medium text, 20px, purple color, right-aligned)
- "ALX is awesome" (small text, 15px, blue color, center-aligned)

**Code Implementation**:
```jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EntryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entry Screen - Awesome</Text>
      <Text style={styles.largeText}>Typescript is great if you practice more</Text>
      <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
      <Text style={styles.smallText}>ALX is awesome</Text>
    </View>
  );
}
```

#### StyleSheet Implementation
```jsx
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
  },
  title: {
    fontSize: 28,
    color: "#000000",
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});
```

### 4. Expo Router Setup
- Installed required dependencies: `expo-router`, `react-native-safe-area-context`, `react-native-screens`, `expo-linking`, `expo-constants`, `expo-status-bar`
- Updated `package.json` main entry point to `expo-router/entry`
- Created `app/_layout.tsx` for root layout configuration

## 🔧 Available Scripts

The project includes the following npm scripts:
- `npm start` - Start the Expo development server
- `npm run android` - Start the app on Android emulator/device
- `npm run ios` - Start the app on iOS simulator/device (requires macOS)
- `npm run web` - Start the app in web browser

## 🚨 Reset Project Command

### Attempted Command
```bash
npm run reset-project
```

### Result
**Error**: `npm error Missing script: "reset-project"`

### Analysis
The `reset-project` script is not available in this Expo blank template. This script is typically found in custom project templates or specific development workflows, but the standard Expo blank template does not include this functionality.

### Available Scripts in This Project
The project only includes the standard Expo scripts:
- `start` - expo start
- `android` - expo start --android
- `ios` - expo start --ios
- `web` - expo start --web

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
2. Verify that the Entry Screen displays "Awesome" and the three additional text components
3. Check that all styling is applied correctly
4. Begin implementing additional screens and features

## 📝 Notes
- The project uses Expo Router for navigation
- The Entry Screen is implemented with proper styling using StyleSheet.create
- All text components have distinct styling for visual hierarchy
- The layout is centered and responsive

---
**Project Created**: August 31, 2025
**Expo Version**: ~53.0.22
**React Native Version**: 0.79.6
**Expo Router Version**: ^5.1.4
