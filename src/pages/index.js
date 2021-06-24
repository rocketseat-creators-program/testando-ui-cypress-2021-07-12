import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { navigate } from '@reach/router';
import React from "react";
import Layout from "../components/layout";


const IndexPage = () => {
  return (
    <Layout>
      <Typography variant="h1">Olá!</Typography>
      <Typography variant="h2">Boas vindas à página inicial</Typography>
      <Button variant="outlined" color="secondary" onClick={() => navigate('/page-2')}>
        Visitar página 2
      </Button>
    </Layout>
  )
}

export default IndexPage
