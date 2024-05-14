<template>
  <table class="leaderboard border-collapse border border-gray-400">
    <thead>
      <tr class="header">
        <th class="rank">Rank</th>
        <th class="name">Name</th>
        <th class="score">Score</th>
      </tr>
    </thead>
    <tbody>
      <tr class="row">
        <td class="rank">1</td>
        <td class="name">John Doe</td>
        <td class="score">1000</td>
      </tr>
      <tr class="row">
        <td class="rank">2</td>
        <td class="name">Jane Smith</td>
        <td class="score">950</td>
      </tr>
      <tr class="row">
        <td class="rank">3</td>
        <td class="name">Alice Johnson</td>
        <td class="score">900</td>
      </tr>
      <!-- Add more rows as needed -->
    </tbody>
  </table>
</template>

<style scoped>
/* Optional custom styles */
.leaderboard {
  max-width: 600px;
  margin: 0 auto;
}

.leaderboard .header {
  background-color: #4c51bf;
  color: #fff;
}

.leaderboard .header th {
  padding: 10px;
  text-align: left;
}

.leaderboard .row:nth-child(even) {
  background-color: #f7f7f7;
}

.leaderboard .row:hover {
  background-color: #e2e8f0;
}

.leaderboard .rank {
  width: 50px;
}

.leaderboard .name {
  width: 200px;
}

.leaderboard .score {
  width: 100px;
}
</style>