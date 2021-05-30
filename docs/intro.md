---
sidebar_position: 1
---

# Getting started

Pypesa is python wrapper for  **Mpesa payment API**  by Vodacom for mobile payment integration made with care, with this package integrating with Vodacom Mpesa API made as smooth as
possible for newbie and experienced developers.

`Transaction query  ⮕  Pypesa  ⮕ Done`

## Opensource

Pypesa is an opensource project under MIT public license, the complete source code can be found at [pypesa](https://kalebu.github.io/pypesa), I welcome contributors to the package whether its a code or documentation warmly welcome.

You can Take a look at [contributing.md](https://github.com/Kalebu/pypesa/blob/main/Contributing.md) for more guide on howto.

## What Pypesa allows you to do ?

With Pypesa package you will be able to do the following kind of transaction;

- Customer to Bussiness (C2B) Single Payment
- Bussiness to Customer (B2C)
- Bussiness to Bussiness (B2B)
- Payment Reversal
- Query Transaction status
- Direct debit creation and Payment

## Installation

To get started with the pypesa package firstly install the package using python *pip* just as illustrated below;

```bash
pip install python-pesa
```

To make sure you install the latest version of Pypesa to keep yourself updated do this;

```bash
pip install --upgrade python-pesa
```

You can also install directly from github install directly from github just as shown below;

```bash
git clone https://github.com/Kalebu/pypesa
cd pypesa
pypesa-> python setup.py install 
```

Now once we have already installed the python-pesa package, there is more thing that we need to set up before we start the developement which getting API key and Secret keys

## API Keys

In order to able to integrate with Mpesa-API you need an API Key and Public Key to access the API.

They offer two kinds of auth keys;

- Sandbox for Experimenting and Prototyping
- Production for Deployment to real life usecase.

## Sandbox

To get your *sandbox* auth keys you need to sign up to their openapi portal and instantly you will get your keys ready to begin experimenting and prototyping your payment solution.

## Production

To deploy your payment solution to production, you're supposed to have production keys which you can get them by doing paper work with vodacom or applying remotely through their openapi portal

Here is an article on how to easily get your authentication keys;

[Getting started with Mpesa Developer portal](https://dev.to/alphaolomi/getting-started-with-mpesa-developer-portal-46a4)