document.addEventListener('DOMContentLoaded', () => {
    const themeForm = document.getElementById('themeForm');

    themeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Fetch user inputs
        const teamName = document.getElementById('teamName').value;
        const teamLeadName = document.getElementById('teamLeadName').value;
        const teamLeadPhone = document.getElementById('teamLeadPhone').value;
        const teamLeadEmail = document.getElementById('teamLeadEmail').value;
        const theme1 = parseInt(document.getElementById('theme1').value);
        const theme2 = parseInt(document.getElementById('theme2').value);
        const theme3 = parseInt(document.getElementById('theme3').value);
        const problemStatement1 = document.getElementById('problemStatement1').value;
        const problemStatement2 = document.getElementById('problemStatement2').value;
        const problemStatement3 = document.getElementById('problemStatement3').value;

        // You can store the selected statements and team information on the server here
        // Implement server-side logic to assign problem statements to teams (limit to 5 teams per statement)

        // Display a confirmation message (modify as needed)
        alert(`Team ${teamName} (${teamLeadName}) has selected the following problem statements:
        Theme 1: ${problemStatement1}
        Theme 2: ${problemStatement2}
        Theme 3: ${problemStatement3}`);
    });
});
