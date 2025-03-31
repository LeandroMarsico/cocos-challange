
A React Native application for managing trading orders with a user-friendly interface.

## Features

- Real-time order placement
- Support for Market and Limit orders
- Buy and Sell order types
- Quantity and price input validation
- Order status tracking
- Responsive modal interface
- Loading state handling

## Components

### OrderModal

The main component for placing trading orders with the following features:

- Order type selection (Market/Limit)
- Order side selection (Buy/Sell)
- Quantity input
- Price input for limit orders
- Investment amount calculation
- Real-time validation
- Status notifications

### Supporting Components

- Button: Customizable button component with primary/secondary styles
- ToggleButtonGroup: Group of toggleable buttons for selections
- Loading: Loading state indicator

### Create .env file in the project root with the following

```bash
API_BASE_URL=
```

### Install dependencies

```bash
yarn install
```
### Run the app in emulator or real device

```bash
yarn android
# or
yarn ios
```
