import React, { useState } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Stats from '../../components/Stats/Stats';
import BrushBarChart from '../../components/Charts/BrushBarChart/BrushBarChart';
import Copyright from '../../components/Copyright/Copyright';
import MonthYearhDatePicker from '../../components/Pickers/DatePicker/MonthYearDatePicker';
import {useStyles} from '../../styles/styles';
import Title from '../../components/Title/Title';

export default function Escalation(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedLargeHeightPaper = clsx(classes.paper, classes.fixedLargeHeight);
    const fixedResponsiveHeightPaper = clsx(classes.paper, classes.fixedTotalHeight);
    const {data, fancyTimeFormat} = props;

    //state
    
    const first = data.reduce(((acc,actual)=> acc+actual.averagePv),0)/data.length;
    const second = data.reduce(((acc,actual)=> acc+actual.averageUv),0)/data.length;
    const third = data.reduce(((acc,actual)=> acc+actual.averageAmt),0)/data.length;
    const total = (first+second+third)/3;
    //
    const escalationDate = new Date();
    escalationDate.setMonth(escalationDate.getMonth()-1);
    //default time
    const [date, setDate] = useState('Noviembre 2020');
    const [datePicker, setDatePicker] = useState(escalationDate);

    //--emails
    
    const [firstResolution, setFirstResolution] = useState(data.reduce(((acc,actual)=> acc+actual.pv),0));
    const [scaled, setScaled] = useState(data.reduce(((acc,actual)=> acc+actual.uv),0));
    const [priorScaled, setPriorScaled] = useState(data.reduce(((acc,actual)=> acc+actual.amt),0));
    const [totalEmails, setTotalEmials] = useState(firstResolution+scaled+priorScaled);
    //--time
    const [firstTime, setFirstTime] = useState(fancyTimeFormat(first));
    const [scaledTime, setScaledTime] = useState(fancyTimeFormat(second));
    const [priorScaledTime, setPriorScaledTime] = useState(fancyTimeFormat(third));
    const [totalTime, setTotalTime] = useState(fancyTimeFormat(total));

    const onChange = (data)=> {
        ChangeDate(data);
        changeStats(data);
    }

   
    const changeStats = (data) =>{

        let scaled=0;
        let prior=0;
        let scaledTime=0;
        let priorTime=0;
        let firstTime=0;
        //{ name: '1', uv: 300, pv: 456 , amt: 100, averageUv: 30, averagePv: 7200, averageAmt: 3600 },

        const first = data.reduce((acc, actual) => {
            scaled+= actual.uv;
            prior+= actual.amt;
            scaledTime+= actual.averageUv;
            priorTime+= actual.averageAmt;
            firstTime+= actual.averagePv;
            return acc + actual.pv
        }, 0);

        firstTime = firstTime/data.length;
        scaledTime = scaledTime/data.length;
        priorTime = priorTime/data.length;
        const totalTime = (firstTime + scaledTime + priorTime)/3;

        //update quantity of emails
        setFirstResolution(first);
        setScaled(scaled);
        setPriorScaled(prior);
        setTotalEmials(first+ scaled+prior);

        //times
        setFirstTime(fancyTimeFormat(firstTime));
        setScaledTime(fancyTimeFormat(scaledTime));
        setPriorScaledTime(fancyTimeFormat(priorTime));
        setTotalTime(fancyTimeFormat(totalTime));
    }
 
    const parseMonth = {
        0: 'Enero',
        1: 'Febrero',
        2: 'Marzo',
        3: 'Abril',
        4: 'Mayo',
        5: 'Junio',
        6: 'Julio',
        7: 'Agosto',
        8: 'Septiembre',
        9: 'Octubre',
        10: 'Noviembre',
        11: 'Diciembre'
    }

    const ChangeDate = (data) => {
        if(data.length===31 || data === 'month'){
            setDate(`${parseMonth[datePicker.getMonth()]} ${datePicker.getFullYear()}`)
        }
        else if(data.length>1){
            setDate(`del ${data[0].name} al ${data[data.length-1].name} de ${parseMonth[datePicker.getMonth()]}, ${datePicker.getFullYear()}`)
        }
        else{
            setDate(` ${data[0].name} de ${parseMonth[datePicker.getMonth()]}, ${datePicker.getFullYear()}`)
        }

    }



    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Recent Stats */}
                    <Grid item xs={12} md={3} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title="Primer Nivel" 
                                date={date} 
                                quantity={firstResolution} 
                                time={firstTime} 

                                />
                        </Paper>
                    </Grid>
                     {/* Recent Stats */}
                     <Grid item xs={12} md={3} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title="Escalados" 
                                date={date} 
                                quantity={scaled} 
                                time={scaledTime}
                                />
                        </Paper>
                    </Grid>
                     {/* Recent Stats */}
                     <Grid item xs={12} md={3} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title="Prioritarios" 
                                date={date} 
                                quantity={priorScaled}
                                time={priorScaledTime}
                                />
                        </Paper>
                    </Grid>
                    {/* Recent Stats */}
                    <Grid item xs={12} md={3} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Stats 
                                title="Correos Totales" 
                                date={date} 
                                quantity={totalEmails} 
                                time={totalTime}
                                />
                        </Paper>
                    </Grid>
                    {/* <Grid item xs={12} md={3} lg={3} >
                        <Paper className={fixedResponsiveHeightPaper}>
                            <MonthYearhDatePicker/>
                        </Paper>
                    </Grid> */}
                   {/* Recent Orders */}
                   <Grid item xs={12}>
                        <Paper className={fixedLargeHeightPaper}>
                            <Grid container>
                                <Grid item xs={10} md={10} lg={10}>
                                    <Title>Estadísticas</Title>

                                </Grid>
                                <Grid item xs={2} md={2} lg={2} >
                                    <MonthYearhDatePicker 
                                        datePicker ={datePicker}
                                        setDatePicker={setDatePicker} 
                                        onChangeDate={ChangeDate}
                                        />
                                </Grid>
                            </Grid>
                            <BrushBarChart 
                                data={data} 
                                onChange={onChange}
                                />
                        </Paper>
                    </Grid>
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    );
}