package com.example.webdev.services;

import com.example.webdev.models.Widget;
import com.example.webdev.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

//    private List<Widget> widgets = new ArrayList<Widget>();
//    {
//
//        Widget w1 = new Widget(123l, "ABC123", "HEADING", 1, "Widgets for Topic ABC123");
//        Widget w2 = new Widget(234l, "ABC123", "PARAGRAPH", 1, "Lorem Ipsum");
//        Widget w3 = new Widget(345l, "ABC234", "HEADING", 2, "Widgets for Topic ABC234");
//        Widget w4 = new Widget(456l, "ABC234", "PARAGRAPH", 1, "Lorem Ipsum");
//        Widget w5 = new Widget(567l, "ABC234", "PARAGRAPH", 1, "Lorem Ipsum");
//
//        widgets.add(w1);
//        widgets.add(w2);
//        widgets.add(w3);
//        widgets.add(w4);
//        widgets.add(w5);
//    }
    
    public Widget createWidgetForTopic(String topicId, Widget widget) {
        widget.setTopicId(topicId);
        return repository.save(widget);
//        widget.setId((new Date()).getTime());
//        widgets.add(widget);
//        return widget;
    }
    
    public List<Widget> findAllWidgets() {
        return (List<Widget>) repository.findAll();
//        return widgets;
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        return repository.findWidgetsForTopic(topicId);
//        List<Widget> ws = new ArrayList<Widget>();
//        for(Widget w: widgets) {
//            if(w.getTopicId().equals(topicId)) {
//                ws.add(w);
//            }
//        }
//        return ws;
    }

    public Integer deleteWidget(Long id) {
        repository.deleteById(id);
//        int index = -1;
//        for(int i=0; i<widgets.size(); i++) {
//            if(widgets.get(i).getId().equals(id)) {
//                index = i;
//                widgets.remove(index);
//                return 1;
//            }
//        }
        return -1;
    }

    public Integer updateWidget(Long id, Widget widget) {
        Widget originalWidget = repository.findById(id).get();
//        Boolean isPresent = repository.findById(id).isPresent();
//        if (isPresent) {
//            Widget originalWidget1 = repository.findById(id).get();
//        }

        // TODO: copy all the other fields testing for null
//        originalWidget.setText(widget.getText());
        if (widget.getText() != null) originalWidget.setText(widget.getText());
        if (widget.getId() != null) originalWidget.setId(widget.getId());
        if (widget.getName() != null) originalWidget.setName(widget.getName());
        if (widget.getTopicId() != null) originalWidget.setTopicId(widget.getTopicId());
        if (widget.getType() != null) originalWidget.setType(widget.getType());
        if (widget.getOrdered() != null) originalWidget.setOrdered(widget.getOrdered());
        if (widget.getSrc() != null) originalWidget.setSrc(widget.getSrc());
        if (widget.getSize() != null) originalWidget.setSize(widget.getSize());
        if (widget.getWidth() != null) originalWidget.setWidth(widget.getWidth());
        if (widget.getHeight() != null) originalWidget.setHeight(widget.getHeight());
        if (widget.getCssClass() != null) originalWidget.setCssClass(widget.getCssClass());
        if (widget.getStyle() != null) originalWidget.setStyle(widget.getStyle());
        if (widget.getValue() != null) originalWidget.setValue(widget.getValue());

        repository.save(originalWidget);

        return 1;
//        for(int i=0; i<widgets.size(); i++) {
//            if(widgets.get(i).getId().equals(id)) {
//                widgets.set(i, widget);
//                return 1;
//            }
//        }
//        return -1;
    }
}
