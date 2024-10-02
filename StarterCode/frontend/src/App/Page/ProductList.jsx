import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Button, Typography, Box } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Container sx={{ padding: '2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Simple Card List
            </Typography>

            {products.length === 0 ? (
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                    }}
                >
                    <Typography variant="h6" align="center">
                        No cards remaining
                    </Typography>
                </Box>
            ) : (
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {products.map((product) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={product.id}
                        >
                            <Box
                                sx={{
                                    border: '1px solid #ddd',
                                    padding: 2,
                                    textAlign: 'center',
                                    borderRadius: 4,
                                    backgroundColor: '#f9f9f9',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    maxWidth: '300px',
                                    minWidth: '250px',
                                    margin: '0 auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '350px',
                                }}
                            >
                                <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="body2">{product.description}</Typography>
                                <Typography variant="h6">${product.price}</Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDelete(product.id)}
                                    sx={{ marginTop: 1 }}
                                >
                                    Delete
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default ProductList;
