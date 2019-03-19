﻿# RecipEasy.app

#### A repository with files pertaining to RecipEasy.app.

#### By **Claire Gibeau, Micah Rabinowitz, Nick Anderson, Vera Weikel**

## Description
<pre>
RecipEasy.app!

Idea: Four step app:
       	1-Select a recipe
       	2-Make an ingredient list
       	3-Find a grocery store location
       	4-See recipe instructions to make meal
*these are the main components that the app will be based upon. Actual flow and transitions may be less rigid.

Target Audience: Anyone who cooks, travelers, people who like efficiency

Problem: When pulling up a recipe online these days, you have to read a bloggers whole life story just to
get down to what they are actually making and what ingredients you need.  Skip the novel and get straight to the goods with RecipEasy; locate a delish recipe, track exactly what ingredients you need, and see 
where to go to get the goods so that you can get cooking in record time.

Goal: Find recipe. List needed ingredients. Find location to purchase ingredients. Store ingredients list 
as *haves* vs *needs to buy*. See how to make dish.
</pre>
## Pseudocode for Project: 
<pre>
Four step app:
       	1-Select a recipe
       	2-Make an ingredient list
       	3-Find a grocery store location
        4-See recipe instructions to make meal
           
1-Landing Page/Select a recipe---Friday, 1st half of Monday
    *Search bar 
    *Nav bar
    *API generated food categories
        image card links or list
    *Select recipe, transitions to step 2

2-Make an ingredient list---Complete Monday
    *Ingredients for recipe populate in checklist
    *User checks off items they already have
    *Ingredients seperate need to buy on top, checked/already have on the bottom
    *Ready to shop, transitions to step 3

3-Find a grocery store location---Start Monday, complete Tuesday
    *Maps API populates URL link for grocery store locations [Research modals]
    *Upon URL selection user is taken to map site
    *ingredient checklist remains until completed
    *once all ingredients have been checked, transitions to step 4

4-See recipe instructions to make meal---Start Tuesday, complete Wednesday
    *Recipe image and directions    on how to make meal display
    *Done!

5-If time permits---Add recipe diary-start ASAP
</pre>
## Proposed pseudocode for ingredient page:
<pre>
Stage 2, ingredient list will be in a card with 4 pieces.
Image pulled from API as the card head.
Name of recipe pulled from API as card title.
List of ingredients pulled from API as a checklist in card body.
Each ingredient should be its own line with a check box.
The line should be crossed through if the box is checked.
A button at the bottom of the card should redirect to stage 2.5 (map url).

Stage 2.5, map will be in a card with 3 pieces.
Image of Google Maps that takes you to the Google Maps app as head.
Name of recipe pulled from API as card title.
List of ingredients pulled from API as checklist in card body.
The ingredient list should be stored for when the user comes back to RecipEasy app.

Stage 3, instructions will be in a card with 3 pieces.
Image pulled from API as the card head.
Name of recipe pulled from API as card title.
List of instructions pulled from API as a checklist in card body.
Each instruction should be its own line with a check box.
The line should be crossed through if the box is checked.
A button at the bottom of the card should redirect to stage 4 (NTH).
</pre>

## Specification/Requirements
1. Clone this repository: https://github.com/QuietEvolver/RecipEasy and/or https://quietevolver.github.io/RecipEasy/
2. Open the command line--and navigate into the repository.
3. On your browser, open the desired file, and enjoy!

## Known Bugs
* Work in progress.

## Technologies Used
* Visual Studio Code
* Markdown
* FireBase
* CSS
* GitHub
* HTML
* JavaScript
* Bootsrap v4.3.1
* FireBase: recipeasy-16148

## Support and contact details

* Claire Gibeau: claire.gibeau@outlook.com
* Micah Rabinowitz: micahrabinowitz@gmail.com
* Nick Anderson: nick.aaland@gmail.com
* Vera Weikel: vera.weikel@gmail.com

_Please contact with questions and/or comments._

### License

*This software is licensed under the MIT license*

Copyright (c) 2019 **By _Claire Gibeau_, _Micah Rabinowitz_, _Nick Anderson_, _Vera Weikel_**
