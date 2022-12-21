import React, { useEffect, useState } from "react";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const Categories = () => {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState("");
  const dispatch = useDispatch();
  const selectCats = useSelector((state) => state.loanReducer.cats);
  const handleAdd = () => {
    setData([...data, cat]);
  };
  const handleSubmit = () => {
    const type = "addCats";
    const payload = data;
    const action = { type, payload };
    dispatch(action);
  };
  useEffect(() => {
    setData(selectCats);
  }, [selectCats]);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <TextField
            variant="outlined"
            onChange={(e) => setCat(e.target.value)}
            label="Add Category"
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={handleAdd}
            variant="contained"
            fullWidth
            sx={{ height: 55 }}
            color="warning"
          >
            Add
          </Button>
        </Grid>
        {data.map((item) => (
          <Grid item xs={3}>
            <Card sx={{ bgcolor: "coral" }}>
              <CardContent>{item}</CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={3}>
          <Button
            onClick={handleSubmit}
            sx={{ height: 65 }}
            variant="contained"
            color="success"
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
