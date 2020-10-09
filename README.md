# Binary Clock Core

The core logic of a binary clock

## Installation

Not published on npm yet

## Usage

### 1. Creating the clock object

```
import { createBinaryClock } from "binary-clock-core";

const clock = createBinaryClock(new Date());
```

### 2. Using the core API

```
clock.getHours();
clock.getMinutes();
clock.getSeconds();
```

### 3. Sample output

Use the clock coordinates below to display a time unit.

```
{
  a4: 'Off',
  a3: 'Off',
  a2: 'On',
  a1: 'Off',
  b4: 'Off',
  b3: 'Off',
  b2: 'On',
  b1: 'Off'
}
```

### Clock Coordinates

![Clock Picture](assets/clock.png)
