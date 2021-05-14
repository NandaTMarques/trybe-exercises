import './App.css';
import Button from './component/forms/Button';
import Header from './component/forms/Header';
import InputText from './component/forms/InputText';
import { connect } from 'react-redux';
import add from './actions/add.action';
import Select from './component/forms/Select';
import SelectItem from './component/forms/SelectItem';
import Radio from './component/forms/Radio';
import InputTextArea from './component/forms/InputTextArea';

function App({name,
  email,
  cpf,
  address,
  city,
  state,
  habitation,
  job,
  jobDescription,
  description, add}) {

    const handleChange = (({target}) => {
      const { checked, value, name } = target;
      if(checked) add(name, value)
    });

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section>
        <fieldSet>
          <InputText title="Name" name="name" type="text" maxlength={40} required onChange={({target}) => add(target.name, target.value)} value={name}/>
          <InputText title="Email" name="email" type="text" maxlength={50} required onChange={({target}) => add(target.name, target.value)} value={email}/>
          <InputText title="CPF" name="cpf" type="text" maxlength={11} required onChange={({target}) => add(target.name, target.value)} value={cpf}/>
          <InputText title="Address" name="address" type="text" maxlength={200} required onChange={({target}) => add(target.name, target.value)} value={address}/>
          <InputText title="City" name="city" type="text" maxlength={28} required onChange={({target}) => add(target.name, target.value)} value={city}/>
          <Select title="State" name="state" id="state" required onChange={({target}) => add(target.name, target.value)} value={state}>
            <SelectItem />
          </Select>
          {['Home', 'Apartment'].map((item) => <Radio title={item} id={item} name="habitation" value={item} onChange={handleChange}/>)}
        </fieldSet>

        <fieldSet>
          <InputText title="Job" name="job" type="text" maxlength={40} required onChange={({target}) => add(target.name, target.value)} value={job}/>
          <InputTextArea title="Job Description" name="jobDescription" type="textArea" maxlength={1000} cols={30} rows={5} required onChange={({target}) => add(target.name, target.value)} value={jobDescription} />
          <InputTextArea title="Description" name="description" type="textArea" maxlength={500} cols={30} rows={5} required onChange={({target}) => add(target.name, target.value)} value={description} />
        </fieldSet>

        <Button type="submit" name="enviar"/>
        <Button type="reset" name="limpar"/>
      </section>
    </div>
  );
}

const mapStateToProps = ({formReducer:{form:{name, email, address, city, state, habitation, job, jobDescription, description, cpf}}}) => ({
  name,
  email,
  address,
  city,
  state,
  habitation,
  job,
  jobDescription,
  description,
  cpf,
});


const mapDispatchToProps = (dispatch) => ({
  add: (name, value) => dispatch(add(name, value)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
