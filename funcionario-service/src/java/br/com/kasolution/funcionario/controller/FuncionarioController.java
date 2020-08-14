/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.kasolution.funcionario.controller;

import br.com.kasolution.funcionario.dao.DaoException;
import br.com.kasolution.funcionario.dao.FuncionarioDao;
import br.com.kasolution.funcionario.modelo.Funcionario;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author igordev
 */
@CrossOrigin(origins = "*", allowedHeaders = "*") //habilitado no controller
@RestController
public class FuncionarioController {

    @RequestMapping("/")
    public String index() {
        return "Servidor iniciado!";
    }

    //@CrossOrigin(origins = "http://localhost:3000") //habilitado no método
    @RequestMapping(value = "grava", method = RequestMethod.POST)
    @ResponseBody
    public void salva(@RequestBody Funcionario funcionario) {
        try (FuncionarioDao dao = new FuncionarioDao()) {
            if (funcionario.getCodigo() == 0) {
                dao.salvar(funcionario);
            } else {
                dao.atualizar(funcionario);
            }
        } catch (DaoException e) {
            System.out.println("Erro ao gravar! " + e.getMessage());
            throw new RuntimeException(e);
        }
    }

    @RequestMapping(value = "lista", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Funcionario> getFuncionarios() {
        try (FuncionarioDao dao = new FuncionarioDao()) {
            return dao.buscarTodos();
        } catch (DaoException e) {
            throw new RuntimeException(e);
        }
    }

    @RequestMapping(value = "get/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Funcionario getFuncionario(@PathVariable("id") int id) {
        try (FuncionarioDao dao = new FuncionarioDao()) {
            return dao.buscarId(id);
        } catch (DaoException e) {
            throw new RuntimeException(e);
        }
    }
    @RequestMapping(value = "remove/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void remove(@PathVariable("id") int id) {
        try (FuncionarioDao dao = new FuncionarioDao()) {
            Funcionario f = dao.buscarId(id);
            dao.excluir(f);
        } catch (DaoException e) {
            System.out.println("Erro ao remover! " + e.getMessage());
            throw new RuntimeException(e);
        }
    }

    @RequestMapping("paginaErro")
    public String erro(HttpServletRequest request) {
        return "Erro! Confira o log.";
    }

}
