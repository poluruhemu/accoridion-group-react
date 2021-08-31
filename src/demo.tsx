import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  })
);

export default function SimpleAccordion() {
  const classes = useStyles();
  const jsonData = [
    { name: "bruce", job: "I am batman" },
    { name: "clark", job: "I am superman" },
    { name: "louis" }
  ];

  return (
    <div className={classes.root}>
      {Object.keys(jsonData).map(function (keyName, keyIndex) {
        return jsonData[keyIndex].job ? (
          <div>
            <Accordion id="{keyName}">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {jsonData[keyName].name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{jsonData[keyIndex].job}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ) : (
          false
        );
      })}
    </div>
  );
}
