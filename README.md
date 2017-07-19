# Favors
#### Occasionally have free time or tools/things you do not use?

#### Looking to use other people's time or things?

## Enter Favors
___
![ERD for Favors](http://i.imgur.com/2XCBqRP.png "Favors ERD")

## [Wireframe Presentation Here](https://docs.google.com/presentation/d/11MZD2ljGwtRAdKnE_II0v9AMik9_nj1F-7nAe954b-E/edit?usp=sharing "Favors Google Slides Presentation")

## User Story
___

1.	Splash Page
  *	User clicks about and watches video
	* User clicks FAQ and reads
  *	User clicks contact and sees info
2.	User is unregistered so they click “Start Now”
  *	Gets taken to registration form and fills it out (should make it minimal so convince users to sign up)
  *	Redirected to their profile page where they fill out additional required information
  *	Redirected to their completed profile
  *	User hits see jobs (go to 4)
3.	User is registered so they hit sign in, login modal appears
4.	User is redirected to the recent favors page
  -	there is a toggle button so they can see requested favors or offered favors
  -	there is also a search bar where the user can search by favor or user attributes.
5.	User can click on their points icon to be directed to a page where they can buy more points with cash (they can also earn points by completing favors for other users)
    *	Click on a favor to be taken to the show page
    *	Click on the plus icon on a favor to be taken to favor fulfill request page
    *	Click on the minus to hide the favor
    *	User can click on the profile Icon in the top right (go to 7)
    *	User can also chat with the bar on the left at all times with other online users, or send messages to offline users
6.	User hits post a favor and gets taken to the form they can fill out to either request or offer a favor
  *	User is redirected to the favor show page where they can see their newly posted favor
  *	User who posted can edit any and all favor information here
  *	User Can go back to all favors by using NAV bar
  *	Users who did not post favor can click on favor fulfill button to request to complete this favor
7.	User Show
  *	User can see other user or own users profile/show page
  *	Can see the users radius to see how far they will travel to complete a favor
8.	User logs off

## Frameworks and Libraries
___

#### Client
* React
  * React DOM
  * React Router DOM
  * React Semantic UI
* Redux
  * React-Redux
* Reactive JavaScript
* WebSocket

#### Server
* Ruby on Rails
* MongoDB
* CUID

## Store State
___

```JavaScript
state = {
  auth: {
    isLoggedIn: boolean
    userName: string
  },
  user = {
    id: integer,
    cuid: string,
    email: string,
    firstName: string,
    lastName: {editorState},
    rep: integer,
    zipCode: integer,
    travelRadius: integer,
    wallet: integer
  },
  favors = {
    id: integer,
    cuid: string,
    description: string,
    category: string,
    cost: integer,
    minRep: integer,
    isComplete: boolean,
    dueDate: integer
  },
  chat = {
    id: integer
    receiverId: integer,
    senderId: integer,
    messages: [
      {
      content: string,
      senderId: integer
      }
    ]
  }
}
```
