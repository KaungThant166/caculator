const display = document.getElementById("display");

const appendToDisplay = (input) => {
  display.value += input;
};

const caculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};

const celarDisplay = () => {
  display.value = "";
};
