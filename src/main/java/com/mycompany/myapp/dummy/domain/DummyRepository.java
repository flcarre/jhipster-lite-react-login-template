package com.mycompany.myapp.dummy.domain;

import java.util.List;

public interface DummyRepository {
  List<Dummy> list();
  void add(Dummy dummy);
  void clear();
}
