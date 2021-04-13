const app = express();
const PORT = process.env.PORT || 3050;

app.use(express.static(__dirname + '/dist/crudLoginAngular'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/crudLoginAngular/index.html'));
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
