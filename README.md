<h1>GFT Challenge - Restaurant Order App</h1>
<p>In this project, an Angular SPA was developed as a frontend solution to GFT Challenge - Restaurant Order App.</p>
<p>This SPA consumes the API published <a href="https://github.com/cristofer-js19/api">here</a>.</p>
<p>The technology used was Angular 6, with the following dependencies:</p>
<ul>
	<li>Bootstrap</li>
	<li>jQuery</li>
	<li>Tether</li>
	<li>Popper.js</li>
</ul>

<br />

<h2>Challenge requirements:</h2>
<h3>Frontend Requirements:</h3>
<ol>
	<li>Create SPA website using any JavaScript framework (e.g. Angular, ReactJs etc.)</li>
	<li>Main Page must have 4 components : input textbox, output textbox, button( send order) and grid</li>
	<li>The grid must keep history of inputs and outputs that user had requested before</li>
	<li>Website can(optional) have unit tests</li>
	<li>Push your solution in a GitHub repository, and send us a link when done</li>
</ol>

<h3>Backend Requirements:</h3>
<ol>
	<li>Create this solution as a web API application</li>
	<li>Solution must have unit tests</li>
</ol>

<h3>Rules:</h3>
<ol>
	<li>You must enter time of day as “morning” or “night”</li>
	<li>You must enter a comma delimited list of dish types with at least one selection</li>
	<li>The output must print food in the following order: entrée, side, drink, dessert</li>
	<li>There is no dessert for morning meals</li>
	<li>Input is not case sensitive</li>
	<li>If invalid selection is encountered, display valid selections up to the error, then print error</li>
	<li>In the morning, you can order multiple cups of coffee</li>
	<li>At night, you can have multiple orders of potatoes</li>
	<li>Except for the above rules, you can only order 1 of each dish type</li>
</ol>

<div id="table1">
	<h3>Dishes for Each time of day</h3>
	<table>
		<tr>
			<td><strong>Dish type</strong></td>
			<td><strong>morning</strong></td>
			<td><strong>night</strong></td>
		</tr>
		<tr>
			<td>1 (entrée)</td>
			<td>eggs</td>
			<td>steak</td>
		</tr>
		<tr>
			<td>1 (entrée)</td>
			<td>eggs</td>
			<td>steak</td>
		</tr>
		<tr>
			<td>2 (side)</td>
			<td>toats</td>
			<td>potato</td>
		</tr>
		<tr>
			<td>3 (drink)</td>
			<td>coffee</td>
			<td>wine</td>
		</tr>
		<tr>
			<td>3 (dessert)</td>
			<td>Not Applicable</td>
			<td>cake</td>
		</tr>
	</table>
</div>

<div id="table2">
	<h4>Sample Input and Output:</h4>
	<table>
		<tr>
			<td>Input: morning, 1, 2, 3</td>
			<td>Output: eggs, toast, coffee</td>
		</tr>
		<tr>
			<td>Input: morning, 2, 1, 3</td>
			<td>Output: eggs, toast, coffee</td>
		</tr>
		<tr>
			<td>Input: morning, 1, 2, 3, 4</td>
			<td>Output: eggs, toast, coffee, error</td>
		</tr>
		<tr>
			<td>Input: morning, 1, 2, 3, 3, 3</td>
			<td>Output: eggs, toast, coffee(x3)</td>
		</tr>
		<tr>
			<td>Input: night, 1, 2, 3, 4</td>
			<td>Output: steak, potato, wine, cake</td>
		</tr>
		<tr>
			<td>Input: night, 1, 2, 2, 4</td>
			<td>Output steak, potato(x2), cake</td>
		</tr>
		<tr>
			<td>Input: night, 1, 2, 3, 5</td>
			<td>Output: steak, potato, wine, error</td>
		</tr>
		<tr>
			<td>Input: night, 1, 1, 2, 3, 5</td>
			<td>Output: steak, error</td>
		</tr>
	</table>
</div>

<h2>Development server:</h2>
<p>Run 'ng serve' for a dev server. Navigate to 'http://localhost:4200/'. The app will automatically reload if you change any of the source files</p>
