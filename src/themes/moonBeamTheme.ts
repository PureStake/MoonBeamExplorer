import { createMuiTheme,  responsiveFontSizes  } from "@material-ui/core/styles";
//import grey from "@material-ui/core/colors/grey";



export const lightTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  palette: {
    type: "light",
    primary: {
      light: '#000',
      main: '#f3ba2f',
      dark: '#fff',
      contrastText: '#000',
    },
    background: {
     
      paper: "#97DFDE",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: "#f3ba2f",
      },
    },
    MuiTextField: {
      root: {      
        overflow: "visible !important",
        color: "#f3ba2f "
      },
    },
    MuiPaper: {
      root: {
        overflow: "visible !important",
        color: "#000"
      },
    },
    MuiTable: {
      root: {
        color: "visible !important",
      },
    },
   MuiMenuItem : {
    root: {
      color: "##f3ba2f  !important",
    },
   },
    MuiLink: {
      root: {
        color: 'linear-gradient(45deg, #ffea00 30%, #f3ba2f  90%)'
      },
    },
    MuiButton: {
      root: {
        color: "#f3ba2f  !important",
      },
    },
    MuiTypography: {
      
      root: {
        
        outlineStyle: "#666",
        color: "#000" ,
      },
    },
  },
}));


export const darkTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  palette: {
    type: "dark",
    primary: {
      light: '#53CBC9',
      main: '#EA5AA2',
      dark: '#1E0E2D',
      contrastText: '#fff',
    },
    background: {
     
      paper: "#E1147B",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: "#EA5AA2",
      },
    },
    MuiTextField: {
      root: {      
        overflow: "visible !important",
        color: "#E1147B "
      },
    },
    MuiPaper: {
      root: {
        overflow: "visible !important",
        color: "#EA5AA2"
      },
    },
    MuiTable: {
      root: {
        color: "#53CBC9 visible !important",
      },
    },
   MuiMenuItem : {
    root: {
      color: "#52CBC9  !important",
    },
   },
    MuiLink: {
      root: {
        color: 'linear-gradient(45deg, #E1147B 30%, #EA5AA2  90%)'
      },
    },
    MuiButton: {
      root: {
        color: "#53CBC9  !important",
      },
    },
    MuiTypography: {
      
      root: {
        
        outlineStyle: "#53CBC9",
        color: "#53CBC9" ,
      },
    },
  },
}));

export default {
  darkTheme,
  lightTheme,
};
