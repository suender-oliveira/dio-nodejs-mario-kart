
<h1>Felipão's Project Challenge: Mario Kart.JS</h1>

<table>
    <tr>
        <td>
            <img src="./docs/header.gif" alt="Mario Kart" width="200">
        </td>
        <td>
            <b>Objective:</b>
            <p>Mario Kart is a series of racing games developed and published by Nintendo. Our challenge will be to create game logic to simulate Mario Kart races, considering the rules and mechanics described below.</p>
        </td>
    </tr>
</table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Mario</p>
            <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 4</p>
            <p>Maneuverability: 3</p>
            <p>Power: 3</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Peach</p>
            <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 3</p>
            <p>Maneuverability: 4</p>
            <p>Power: 2</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Yoshi</p>
            <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 2</p>
            <p>Maneuverability: 4</p>
            <p>Power: 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Bowser</p>
            <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 5</p>
            <p>Maneuverability: 2</p>
            <p>Power: 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Luigi</p>
            <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 3</p>
            <p>Maneuverability: 4</p>
            <p>Power: 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Donkey Kong</p>
            <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 2</p>
            <p>Maneuverability: 2</p>
            <p>Power: 5</p>
        </td>
    </tr>
</table>

<h3>🕹️ Rules & Mechanics:</h3>

<b>Players:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">The computer must receive two characters to compete in the race, each within its own object</label>

<b>Tracks:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Characters will race on a randomly selected 5-round track</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">Each round, a segment of the track will be drawn, which can be a straightaway, a curve, or a clash</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">If the segment is a STRAIGHTAWAY, the player must roll a 6-sided die and add their SPEED attribute. The winner scores one point</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">If the segment is a CURVE, the player must roll a 6-sided die and add their MANEUVERABILITY attribute. The winner scores one point</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">If the segment is a CLASH, the player must roll a 6-sided die and add their POWER attribute. The loser loses one point</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">No player can have a negative score (values below 0)</label></li>
    </ul>
  </li>
</ul>

<b>Victory Condition:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">At the end, the player with the most points wins</label>
.

<br>
<br>
<p>Extras for battle:
<ul>
    <li>draw whether it's a shell (-1 point) or a bomb (-2 points)</li>
    <li>whoever wins the Battle gets a turbo (+1 point) randomly</li>
</ul>
