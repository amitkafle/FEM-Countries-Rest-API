# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Table of contents
- [Frontend Mentor - REST Countries API with color theme switcher solution](#frontend-mentor---rest-countries-api-with-color-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)


## Overview
### The challenge
Users should be able to:
- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot
- Desktop
![Desktop](/src/assets/screenshots/desktop.png)  
  
- Mobile<br>
![Mobile](/src/assets/screenshots/mobile.png)

### Links
- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-using-react-wV6DQ0flg)
- Live Site URL: [Github Pages](https://amitkafle.github.io/FEM-Countries-Rest-API/)

## My process
### Built with
- HTML
- CSS (SCSS / Grid / Flexbox)
- React

### What I learned
- I have been learning react for a while now and this is my first project using this library. The main thing I learned while doing this project was Hooks and general react workflow. As there are multiple api request needed in this project I made a custom hook `useFetch` which returns data for different requests. I also learned about cleaning up the `useEffect` hook and aborting async api request if another request takes place and previous request is no longer necessary. Also learned to use `react-router`  and several other libraries i.e `uid`, `axios` & `react-loader-spinner`

### Continued development
- I was able to complete this challenge and made it how it is supposed to look like. However, due to styling limitation on `select` element I couldn't make it close to how it is supposed to look like and I will learn to make that. Currently I am using single state for the data that is being fetched which causes the frequent api request when switching between filters. The best thing would be to store all the required data and store in different states and display when necessary without refetching which will save bandwidth and make our project faster and only fetch individual data as per required while loading the country page.

## Author
- Frontend Mentor - [@amitkafle](https://www.frontendmentor.io/profile/amitkafle)
- Twitter - [@amitkafle](https://www.twitter.com/amitkafle)