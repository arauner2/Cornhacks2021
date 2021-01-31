# Cornhacks2021
Repository for Cornhacks 2021 Project with Emma Clausen, Ben Stuart, Sheng-Jie Lim, and Allie Rauner

## Problem
Young students have difficulty staying focused and motivated while in a remote education environment. While the pandemic may eventually end, remote education will likely continue to grow as a solution for those in rural environments or without adequate school districts nearby. For example, Lincoln Public Schools has created a remote-learning option for the 2021-2022 school year, even though vaccines are expected to be distributed to the general public by summer 2021. [200 students](https://www.klkntv.com/lps-to-launch-new-remote-learning-program/) have already chosen this option.

## Solution
Gamification is the ["the use of activities and external rewards to encourage motivation in non-game contexts"](https://www.waterford.org/education/gamification-in-the-classroom/). With distance learning and the lack of motivation provided by peers and in-class activities, it is important to make the learning experience as enjoyable as possible. We propose a simple gamification of earning points from completed assignments that allow students to personalize aspects of their web experience to make the time spent on the computer more fun. Currently, we allow students to change background colors, background images, and fonts as they complete more assignments and unlock more personalizations.

## Technical Implementation
Our project is implemented as a chrome extension that scrapes the Classwork page from Google Classroom to figure out the total number of completed assignments. Based on this number, students are given a certain number of points that corresponds with a certain level. Changing the web page appearance is done by accessing and changing CSS properties.

## Local Deployment Instructions
After downloading this project to the computer, open Google Chrome and navigate to chrome://extensions. Make sure Developer Mode is turned on and click "Load Unpacked" then navigate to the project. This will allow you to access the extension from any tab in Chrome.
