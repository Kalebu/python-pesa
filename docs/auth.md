---
sidebar_position: 2
---


# Authentication

Pypesa offers two distinct ways to authenticate your app

It all comes to you on which one you might find friendly and cool, personally I prefer putting them on separate file [using Json](#authentication-using-json).

- [Using json](#authentication-using-json) 
- [Including in your src code](#explicit-auth-within-source-code)

## Authentication using json 

To authenticate your app using json, you need to have a json file named **keys.json** on your project directory and then add your public and api keys in json format shown below;

  ```python
    {
     'api_key': 'xxx', 
     'public_key': 'xxxxxxxxxxxxxx' 
    }
  ```

When you're done you can then get started with building your payment gateway with python, assumming your auth keys are valid.

```python
import pypesa
mpesa = pypesa()
```

If you named your authentication json in other name than **keys.json**,  you need to specify it while creating an instance for pypesa as shown below;

```python
import pypesa
mpesa = pypesa(auth_path = filename)
```

Note:
please Make sure you specify the correct path while while creating a pypesa instance 
otherwise Pypesa will raise **KeyError** ;

## Explicit auth within source code

Apart from authenticating your python app using Json, you can also explicit specify the key in your code just as shown below;

```python
import pypesa 

mpesa = pypesa()

mpesa.api_key = "xxxxxxxxxxxxx"
mpesa.public_key ="xxxxxxxxxxxxx"
```

**Note**: Please Make sure you're keys are strings, pypesa will raise a TypeError() if you set it to other type than it.
