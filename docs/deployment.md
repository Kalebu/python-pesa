---
sidebar_position: 9
---


# Deployment to Production

The package run by default using sandbox environmnent, If you wanna use it to real production environmnent you can specify it while creating an instance as shown below;

```python
from pypesa import Mpesa
mpesa = Mpesa(environmnent="production")
```

The above code sample will only work provided you're using production authentication keys API Key and Public Key.
