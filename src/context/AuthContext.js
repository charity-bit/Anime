import React,{useEffect,useContext,useState,createContext} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../firebase';

const AuthContext = createContext;
export const useAuth = useContext(AuthContext);