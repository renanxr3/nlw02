import React, { useState, FormEvent, useRef, useEffect } from "react";
import { debounce } from "lodash";

import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [teacher, setTeachers] = useState([]);

  const formRef = useRef<HTMLFormElement>(null);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    callTheApiToSearchTeachers();
  }

  const callTheApiToSearchTeachers = debounce(async () => {
    console.log("searchTeachers");

    const data = {
      subject,
      week_day: weekDay,
      time,
    };

    console.log(data);

    if (subject && weekDay && time) {
      const response = await api.get("classes", {
        params: data,
      });

      setTeachers(response.data);
    }
  }, 1000);

  useEffect(() => {
    callTheApiToSearchTeachers();
  }, [subject, weekDay, time, callTheApiToSearchTeachers]);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" ref={formRef} onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              // reallySearchTeachers();
            }}
            // onBlur={reallySearchTeachers}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
            value={weekDay}
            onChange={(e) => {
              setWeekDay(e.target.value);
              // reallySearchTeachers();
            }}
            // onBlur={reallySearchTeachers}
          />

          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
              // formRef.current?.submit();
              // reallySearchTeachers();
            }}
            // onBlur={reallySearchTeachers}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teacher.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
