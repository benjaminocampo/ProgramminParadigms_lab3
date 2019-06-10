# **MayWeather**

# **Introduction**

Before starting to think about components, we are to identify the main sections of the webpage. These are the title, the search form, and the weather section showing the details of a weather search. Inside the weather details section, there will be two subsections, one for the current weather and another for the following five days' forecast.

In the current weather section, this info is shown: 

- Temperature,
- Atmospheric pressure,
- Humidity,
- Maximum temperature at the moment,
- Minimum temperature at the moment,
- Sunset time,
- Sunrise time,
- An icon representing the weather.

temperatures are shown in celcius.

In the forecast section, there will be around five cards (one for each day) and each card shows:

- The day's date,
- Maximum temperature of the day,
- Minimum temperature of the day,
- An icon representing the weather.

When clicking one of these cards a subsection will be shown, containing for many three-hours intervals, weather details on those three hours:

- Temperature,
- Atmospheric pressure,
- Humidity,
- Maximum temperature at the moment,
- Minimum temperature at the moment,
- Sunset time,
- Sunrise time,
- An icon representing the weather.

# **Components**

This is the general structure of components:


                App
                |
                |
            Weather
                /\
               /  \
              /    \
             /      \ 
    WeatherForm  WeatherDetails
                      /\
                     /  \
                    /    \
                   /      \ 
            Current     Forecast
                           /\
                          /  \
                         /    \
                        /      \ 
                ForecastDay   ForecastDayDetails

And now, we'll describe the most important of these in some detail:

## **Weather**

*Weather*'s job is to get the user input (from the search box) gotten by *WeatherForm*, and to give it to *WeatherDetails*.
To get the user input, *Weather* maintains a state (location) that is updated when an event of type "submit" occurs; this event occurs when
the user writes a location's name in the search box. Once the event is over, the *WeatherDetails* component is mounted with the obtained
imput (i.e the location).

## **WeatherDetails**

Once *WeatherDetails* receives the user input, it is to show the current day's weather details or the five days' forecast details. These data is shown when the corresponding buttons are pressed (there are two buttons, one for the current day and the other for the forecast).

### **Querying**

Once *WeatherDetails* receives the location's name, it will query the current day's weather details and the five days forecast from the openweather API. The data gotten from openweather will be stored in the *WeatherDetails* state. To query the data, we make use of the methods *fetchCurrent* and *fetchForecast* (a note on these methods is that they are asynchronous which means that instead of waiting around for the data to come in, they make the query and then they asynchronously get the data once the query has finished). While the query is being processed, a loading image is shown. If the query fails, an error message is shown.

If a new location is entered into the search box, a new query will be made and so the component's state will be updated. This is done by the *componentDidUpdate* function.

### **Events**

*WeatherDetails* manages two events of type 'click' associated to the Current and Forecast buttons, and are handled by the *handleClickCurrent* and *handleClickForecast* functions, respectively. Basically, the joint purpose of these functions is to decide whether the *Current* or *Forecast* component is shown.

When the *Current* and *Forecast* components are called, they are passed the *WeatherDetails*'s state containing the queried data.

## **Current**

The purpose of this component is to present the current day's data given to it by *WeatherDetails*

## **Forecast**

The purpose of *Forecast* is to show, for each of the following days, the day's forecast. Since the data given by the api doesn't separate between days, we are to filter this data for each of the days.

How is the data given? It's an array of 40, and each element contains a three-hour-range weather details.
This is what we know: the first element of the array corresponds to the first day in the range of days, and the last element of the array corresponds to the last day in the range; also, all data in the array corresponds to consecutive days (i.e there is no missing day in between the first and last days).

To filter all the data into the consecutive days (from first to last), we run the *filter* function for each of the days in the range.

In order to filter all the elements in the array that corresponds to a specific day, we need something in common between those elements and such day. This thing in common is the day's date given in the dt_txt field of an array's element.

We shall iterate from the first day to the last day, in a step of one day. In each iteration, all data in the array corresponding to that day is collected. Since the days are finite (as in, days of a month are finite) and can wrap around, we can not iterate over day numbers; instead, we iterate over the milliseconds in the day. Taking the milliseconds in the first day, and increasing the milliseconds by the amount of milliseconds that are in a day (86400000), until reaching the last day.

Finally, the *ForecastDay* component is called for each of the ~five days whose data has been filtered.

## **ForecastDay, ForecastDayDetails**

Each 'forecast day' has associated a 'forecast day details' that is shown when the user selects a forecast day's card.

A 'forecast day details' has many data, each data for a three-hour interval of time. This is represented by the *ForecastDayDetails* component, whose purpose is to show all that info to the user.

# **Installation**

**React icons (^3.7.0):**

    $ npm install react-icons --save

**Axios (^0.19.0):**
   
    $ npm install axios

**Babel plugins:**

   **Proposal-class-properties:**
   
    $ npm install --save-dev @babel/plugin-proposal-class-properties
   
   **Babel runtime:**
   
    $ npm install --save-dev @babel/plugin-transform-runtime 

    $ npm install --save @babel/runtime

**Proptypes:**

    npm install --save prop-types
