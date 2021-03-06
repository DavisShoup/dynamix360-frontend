import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Create from '../pages/Create';
import ShowGame from '../pages/ShowGame';
import Search from '../pages/Search';
import Home from '../pages/Home';



const Main = (props) => {
    const [ game, setGame ] = useState(null);
            // heroku link goes here when deployed
    const URL = 'http://localhost:4000/game/'

    const getGame = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setGame(data);
    }

    const createGame = async (event) => {
        if(!props.user) return;
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(event)
        });
        getGame();
    }

    const updateGame = async (updatedGame, id) => {
        if(!props.user) return;
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(updatedGame)
        });
        getGame();
    }

    const deleteGame = async (id) => {
        if(!props.user) return;
        await fetch(URL + id, { method: 'DELETE'});
        getGame();
    }

    useEffect(() => {
        getGame();
    }, [props.user]);

    return (
        <main>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/game'>
                <Create 
                user={props.user}
                game={game}
                createGame={createGame}
                />
            </Route>
            <Route path="/game/:id" render={(rp) => (
                <ShowGame
                user={props.user}
                {...rp}
                game={game}
                updateGame={updateGame}
                deleteGame={deleteGame}
                />
            )} />
            <Route path='/search'>
                <Search
                game={game}
                />
            </Route>
        </main>
    )
}

export default Main;