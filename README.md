[Live view](https://archivexblasich.github.io/CV-Application/)

# CV Builder

A small React app where you can fill out your personal information, education, and work experience, and see your CV update in real time.  
It also lets you export your CV as a PDF.

## What I practiced

This project was part of The Odin Project’s React curriculum.  
I practiced:

- **Component structure**: splitting the app into smaller parts (`GeneralInformation`, `Education`, `Work`, and `CvVision`).
- **State management**: lifting state up to `App.jsx` so the CV preview updates instantly when typing in the forms.
- **Props**: passing data and handler functions between parent and child components.
- **Controlled inputs**: making form fields controlled by React state.
- **Dynamic lists**: adding and removing multiple education and work entries.
- **Conditional rendering**: toggling between collapsed “cards” and expanded forms.
- **Exporting content**: generating a PDF with `html2pdf.js`.
