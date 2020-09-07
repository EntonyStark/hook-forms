import util from 'util';

const exec = util.promisify(require('child_process').exec);

export default async (req, res) => {
  const { name } = req.query;

  const { stdout, stderr } = await exec(`npm view ${name} version`);

  if (stderr) throw new Error(stderr);

  res.statusCode = 200;
  res.status(200).send(stdout);
};
