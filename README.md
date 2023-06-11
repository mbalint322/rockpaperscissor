# rockpaperscissor
Rock Paper Scissor Game in JS

Things to change: 
- Score refresh shouldn't be tied to clicking button - DONE, it is tied to the Playround function
- Button should disappear or stop functioning once 5 points are reached. DONE
- Make a reset button appear when someone wins. DONE
- Design UI and story
- Could add more variety in victory / loss message depending on scorecount

9th of May 2023: Now shows win count and announces winner when 5 points are reached.

4th of June 2023: 
- Added hidden attribute toggle to the weapons
- Weapons disappear after winner is announced
- Added Play again button, it appears when winner is announced

Prompts for pixel arts at Microsoft's AI image creator via Bing:

- Prompt for pixel art logo: "Pixel art of a teenage adventurer boy standing on a field. He is wearing a backpack, a red baseball hat, white shirt and a pair of jeans with white sneakers. Before him on the ground are three objects: a rock, a sheet of paper and a pair of scissors."
- Prompt for rock pixel art: "pixel art of a rock"
- Prompt for paper pixel art: "pixel art of a blank paper"
- Prompt for scissor pixel art: "pixel art of a pair of scissors."

11th of June:
- Created pixel arts for logo and weapons
- Created pixel art for monsters
- Designed look for the page, aligned flexboxes
- Added health bars, removing health functions correctly

Tried to change the monster image to another monster's image after choosing a weapon,
but could not get it to work. It could append 1 out of 4 images, but not the rest.
Still have to figure out a way to make this work.
 - Fixed - Had to declare the monster images to preload them, otherwise they wouldn't appear when appending.

- Random monsters now appear according to their types.

STILL TO DO: 
- Hover and on click effects
- Story and animation for the text to appear
- Message to appear above weapon icons and not below - DONE
- Apply character style to appended monsters
- Winner sequence - Player gets their reward for killing 5 monsters
- Text for monsters appearing and change of messages according to new design
- Character image to change depending on what weapon you chose - create more pixel art? Not sure if AI can create consistent character