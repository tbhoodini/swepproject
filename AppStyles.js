// AppStyles.js

const styles = {
    welcomeContainer: {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#1a202c',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
      },
      container: {
        maxWidth: '600px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
      },
      welcomeMessage: {
        fontSize: '2.5em',
        marginBottom: '20px',
        color: '#4299e1',
      },
      appDescription: {
        fontSize: '1.2em',
        marginBottom: '20px',
        color: '#a0aec0',
      },
      nextPageBtn: {
        padding: '10px 20px',
        fontSize: '1.2em',
        backgroundColor: '#fff',
        color: '#2d3748',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease',
      },
      nextPageBtnHover: {
        backgroundColor: '#cbd5e0',
      },
      footer: {
        marginTop: '20px',
      },
    },
    todoListContainer: {
      maxWidth: '600px',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
      marginBottom: '20px',
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100vh',
    },
    taskInput: {
      width: 'calc(100% - 22px)',
      padding: '10px',
      marginBottom: '10px',
      boxSizing: 'border-box',
      border: 'none',
      backgroundColor: '#333',
      color: '#fff',
    },
    actionBtn: {
      padding: '10px 20px',
      fontSize: '1.2em',
      backgroundColor: '#fff',
      color: '#000',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'background-color 0.3s ease',
      marginBottom: '10px',
    },
    actionBtnHover: {
      backgroundColor: '#ccc',
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      backgroundColor: '#333',
      color: '#fff',
      borderRadius: '4px',
      marginBottom: '10px',
      position: 'relative',
    },
    taskMenu: {
      display: 'none',
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: '#555',
      borderRadius: '4px',
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
      zIndex: '1',
    },
    taskItemHover: {
      taskMenu: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    menuItem: {
      padding: '10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    menuItemHover: {
      backgroundColor: '#777',
    },
    deletedTasks: {
      marginTop: '20px',
    },
    commonStyles: {
      footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
      },
      footerP: {
        margin: '0',
        alignItems: 'center',
      },
    },
  };
  
  export default styles;